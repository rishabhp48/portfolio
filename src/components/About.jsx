import React from "react";
import home_image from "../home-image.svg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 home-heading">
                <h1>
                  <strong style={{ color: "rgb(206, 117, 2)" }}>
                    About Us
                  </strong>
                </h1>
                <h2></h2>
                <div className="mt-5">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quis totam eveniet tenetur odio dignissimos quam esse impedit officia a, consectetur, neque veniam ex quos distinctio iste qui accusantium ratione asperiores dolor molestias autem quo illum sequi. Ullam vero atque distinctio ea saepe unde nemo aspernatur autem doloribus, eos ipsam cumque voluptate, repellat suscipit nobis accusamus minima sapiente amet voluptates in voluptatum ipsa voluptas. Placeat velit at dolorem ab unde quasi. Voluptates, voluptas odio tempore nisi dolorum dolores blanditiis atque sapiente dolorem! Quam quo blanditiis dolores dolorem. Tempora sapiente accusamus ea numquam, voluptatem consequuntur, similique, cupiditate modi quod officia velit?</p>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 home-image">
                <img src={home_image} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
