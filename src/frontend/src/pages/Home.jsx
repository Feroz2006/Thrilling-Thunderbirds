import React from "react";
import BaseLayout from "../components/utils/BaseLayout";
import banner from "../assets/images/upside_down_banner.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <BaseLayout>
        <section className="container d-flex mt-5">
          <div className="w-50 d-flex flex-column align-items-start justify-content-center">
            <h1 className="">Bonjour gamers!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              perferendis debitis reprehenderit doloremque rerum nobis neque
              iusto, rem, voluptates dolore laudantium sequi dolorem assumenda
              blanditiis ducimus reiciendis dolorum cumque animi.
            </p>
            <div className="d-flex align-items-center justify-content-center w-100">
              <Button
                className="text-bright-turquoise rounded-pill bg-mirage"
                onClick={() => navigate("/play")}
              >
                <h5 className="m-0 px-3">Get, Set, Go!</h5>
              </Button>
            </div>
          </div>
          <div className="w-50 d-flex align-items-center justify-content-center">
            <img src={banner} alt="banner" className="img-fluid" />
          </div>
        </section>
      </BaseLayout>
    </>
  );
}
