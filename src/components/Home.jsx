import React from "react";
import home_image from "../home-image.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 home-heading">
                  <h1>
                    <strong style={{ color: "rgb(206, 117, 2)" }}>
                      Flux Technologies
                    </strong>
                  </h1>
                  <h2>
                    We provide an excellent responsive websites around the
                    Globes
                  </h2>
                  <div className="mt-5">
                    <Link to="/contact" className="btn">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 home-image">
                  <img src={home_image} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
