import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationApi";

function Destination({ destination }) {
  const [deleteDestinationMutation] = useDeleteDestinationMutation();
  const [updateDestination] = useUpdateDestinationMutation();

  const [isUpdating, setIsUpdating] = useState();
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleUpdate = (e) => {
    let city = "",
      country = "";

    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }

    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }
    e.preventDefault();

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });
    setNewCity("");
    setNewCountry("");
    setIsUpdating(!isUpdating);
  };

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="city..."
                className="form-control"
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              ></input>
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="country..."
                className="form-control"
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              ></input>
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-1 text-warning">{destination.daysNeeded} days</div>

      <div className="col-3">
        <button
          className="btn btn-warning m-1 "
          onClick={() => setIsUpdating(!isUpdating)}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button className="btn btn-primary m-1" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger m-1 "
          onClick={() => deleteDestinationMutation({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
