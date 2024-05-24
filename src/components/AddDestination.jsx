import React from "react";

function AddDestination() {
  return (
    <div className="p-4 border">
      <form>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City..."
          />
          <div className="col-5 p-1"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country..."
          />
          <div className="col-2 p-1"></div>
          <button className="btn btn-success form-control">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
