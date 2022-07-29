from typing import Any

from yaml import safe_load


with open('config.yaml') as file:
    DATA = safe_load(file)


class Undefined:
    def __repr__(self) -> str:
        return 'Undefined'
    
    def __bool__(self) -> False:
        return False


class NonConvertableType(Exception):
    pass


class YamlToClassAttr(type):
    """
    Tries to fetch data from config.yaml and making it class attr
    Defaults to `Undefined` if the attr name is not found.
    """
    
    def __getattr__(cls, attr: str) -> Any:
        class_name = cls.__name__
        
        try:
            cls_data = DATA[class_name]
        except KeyError:
            print(f'{class_name} not found in `config.yaml`')
            return
        
        if attr not in cls.__dict__:
            value = cls_data.get(attr, Undefined())
            obj_type = cls.__annotations__[attr]
            value_type = type(value)
            # trying to convert the object to the type-hint
            if value_type != obj_type:
                
                try:
                    value = obj_type(value)
                except (TypeError, ValueError):
                    raise NonConvertableType(
                        f'cannot convert {value_type.__name__!r} '
                        f"to '{obj_type.__module__}.{obj_type.__name__}'"
                    ) from None
            
            setattr(cls, attr, value)
        
        return cls.__dict__[attr]


class Database(metaclass=YamlToClassAttr):
    uri: str
