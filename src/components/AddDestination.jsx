import React from "react";
import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [addDestinationMutation, results] = useAddDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDestinationMutation({
      id: (parseInt(Math.random() * 10) + 20).toString(),
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });
    setNewCity("");
    setNewCountry("");
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City..."
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
          <div className="col-5 p-1"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country..."
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
          />
          <div className="col-2 p-1"></div>
          <button className="btn btn-success form-control">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
