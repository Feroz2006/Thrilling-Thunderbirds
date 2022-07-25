import React from "react";
import BaseLayout from "../components/utils/BaseLayout";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import Maze from "../assets/images/Maze_Logo.jpg";
import Snake from "../assets/images/Snake_Logo.png";
import { useNavigate } from "react-router-dom";

export default function Play() {
  const navigate = useNavigate();
  return (
    <>
      <BaseLayout>
        <section className="mt-3 d-flex justify-content-center align-items-center vh-80">
          <Card sx={{ width: 345 }} className="bg-filter bg-ebony-clay">
            <CardMedia component="img" height="194" image={Maze} alt="Maze" />
            <CardContent>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold text-bright-turquoise m-0">
                  Maze-a-Thon
                </h5>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon className="text-red opacity-75" />
                </IconButton>
              </div>
              <p className="text-porclain">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </p>

              <div className="text-center">
                <Button
                  className="text-porclain rounded-pill bg-scarpa-flow"
                  onClick={() => navigate("maze")}
                >
                  <p className="m-0">Play!</p>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 345 }} className="bg-filter ms-5 bg-ebony-clay">
            <CardMedia component="img" height="194" image={Snake} alt="Snake" />
            <CardContent>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold text-bright-turquoise m-0">
                  Last-lil-Snake
                </h5>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon className="text-red opacity-75" />
                </IconButton>
              </div>
              <p className="text-porclain">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </p>

              <div className="text-center">
                <Button
                  className="text-porclain rounded-pill bg-scarpa-flow"
                  onClick={() => navigate("snake")}
                >
                  <p className="m-0">Play!</p>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </BaseLayout>
    </>
  );
}
