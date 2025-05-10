import React from "react";
import { Link, useLoaderData } from "react-router";

const Phones = () => {
  // 3.3 now from the flowchart of server "my-phone-server" we get the data
  const phones = useLoaderData();
  console.log(phones);
  // 4.0 as my requirement is onclick on each phone go to that phone page
  return (
    <div>
      <h2>All phones are here {phones.length} </h2>
      {phones.map((phone) => (
        <li key={phone.id}>
          {/* 4.1 created a dynamic link in Link. Previously we did it by find method using useParams and comparing with the useLoader() data because we created the  data base in client side. but as we get the data from backend server so we dynamically set the id*/}
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
