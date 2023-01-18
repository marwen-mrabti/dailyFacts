import React from "react";
import FactCard from "./FactCard";

const FactsList = ({ facts }) => {
  return (
    <ul id="facts-list">
      {facts.map((fact, index) => (
        <FactCard key={fact.id} fact={fact} />
      ))}
    </ul>
  );
};

export default FactsList;
