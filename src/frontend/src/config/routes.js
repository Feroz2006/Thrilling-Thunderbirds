import Home from "../pages/Home";
import Login from "../pages/Login";
import Play from "../pages/Play";
import MazeGame from "../pages/MazeGame";
import SnakeGame from "../pages/SnakeGame";

const routes = [
  {
    path: "",
    component: Home,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/play",
    component: Play,
    name: "Play Page",
    protected: false,
  },
  {
    path: "/play/maze",
    component: MazeGame,
    name: "Maze Game Page",
    protected: false,
  },
  {
    path: "/play/snake",
    component: SnakeGame,
    name: "Snake Game Page",
    protected: false,
  },
];

export default routes;
