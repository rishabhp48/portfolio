import React from "react";
import logo from "../logo.jpg";
import Card from "./card";
import cardData from "./carddata";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" style={{ color: "rgb(206, 117, 2)" }}>
          Our Services
        </h1>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {cardData.map((val, ind) => {
                  return (
                    <Card
                      imgsrc={val.imgsrc}
                      title={val.title}
                      description={val.descrpition}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
