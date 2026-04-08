import React from "react";

const Phone = ({ phone }) => {
  return (
    <section className="border border-red-100 p-3 rounded">
      <h1>{phone.name}</h1>
      <p>{phone.chip}</p>
      <p>{phone.display}</p>
      <p>{phone.camera}</p>
      <p>{phone.price}</p>
    </section>
  );
};

export default Phone;
