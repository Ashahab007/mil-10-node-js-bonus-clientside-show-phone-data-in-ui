import React from "react";
import { useLoaderData } from "react-router";

const Phone = () => {
  // 4.3 fetch the data from the previously created 4.2 loader
  const phone = useLoaderData();
  console.log(phone);

  return (
    <div>
      <div>
        <img src={phone.image} />
      </div>
      <h3>{phone.name}</h3>
      <h3>{phone.description}</h3>
      <h3>{phone.price}</h3>
    </div>
  );
};

export default Phone;
