import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div classNameName="col-md-4 col-10 mx-auto">
        <div
          className="card"
          style={{ width: "200px", height: "auto", marginLeft: "10px" }}
        >
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nostrum ab eum iure rem quaerat dolore consectetur fugiat.
              Aliquam, porro!
            </p>
            <Link to="#" className="btn">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
