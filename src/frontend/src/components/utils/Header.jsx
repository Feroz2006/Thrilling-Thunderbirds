import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { signInWithPopup } from "firebase/auth";
import { auth, Providers } from "../../config/firebase";

export default function Header() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, Providers.google)
      .then(() => {
        console.info("TODO: navigate to authenticated screen");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code + ": " + error.message);
      });
  };

  return (
    <>
      <section className="">
        <div className="container header">
          <div className="header-content">
            <div className="header-content-inner py-3 d-flex justify-content-between align-items-center">
              <h3
                className="glitch m-0 cursor-pointer ms-3"
                onClick={() => navigate("/")}
              >
                <span aria-hidden="true">The Upside Down</span>
                The Upside Down
                <span aria-hidden="true">The Upside Down</span>
              </h3>
              <div>
                <Button className="text-bright-turquoise">
                  <h5 className="m-0">Maze-a-Thon</h5>
                </Button>
                <Button className="text-bright-turquoise mx-3">
                  <h5 className="m-0">Last-lil-Snake</h5>
                </Button>
                <IconButton onClick={() => signInWithGoogle}>
                  <LoginOutlinedIcon className="text-bright-turquoise" />
                </IconButton>
                <IconButton className="ms-3">
                  <AccountCircleOutlinedIcon className="text-bright-turquoise" />
                </IconButton>
              </div>
            </div>
            {/* <hr /> */}
          </div>
        </div>
      </section>
    </>
  );
}
