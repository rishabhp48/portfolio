import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container contact mt-5">
        <h1 className="text-center mb-5" style={{ color: "rgb(206, 117, 2)" }}>
          Contact Form
        </h1>
        <form classNameName="container col-md-10">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="fullname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Maharashtra</option>
                <option>UttarPradesh</option>
                <option>Gujrat</option>
                <option>Andhrapradesh</option>
                <option>Himachal Pradesh</option>
                <option>Delhi</option>
                <option>Haryana</option>
                <option>Punjab</option>
                <option>Jammu</option>
                <option>Kashmir</option>
                <option>Nagaland</option>
                <option>Arunanchal Pradesh</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
