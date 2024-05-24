import React from "react";
import { useGetAllDestinationsQuery } from "../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     deleteDestinationMutation();
  //   };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    // console.log(data);
    content = data.map((destination) => {
      return <Destination destination={destination} key={destination.id} />;
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
