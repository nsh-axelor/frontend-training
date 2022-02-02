import React, { useEffect, useState } from "react";
import ErrorHandler from "./ErrorHandler";
import UserCard from "./UserCard";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      <ErrorHandler>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "wrap",
          }}
        >
          {data.map(({ id, name, username, email }) => (
            <UserCard id={id} name={name} username={username} email={email} />
          ))}
        </div>
      </ErrorHandler>
      <ErrorHandler>
        <UserCard />
      </ErrorHandler>
    </>
  );
};

export default Users;
