import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import User from "./User";
import users from "../../images/users.png";
import style from "./customStyle.module.css";
import Placeholder from "react-bootstrap/Placeholder";
import PlaceHolder from "../PlaceHolder/PlaceHolder";

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [placeholder, setPlaceholder] = useState(false);
  useEffect(() => {
    async function getUsers() {
      setPlaceholder(true);
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users",
      );
      setUsers(response.data);
      setPlaceholder(false);
    }
    getUsers();

    return () => {};
  }, []);

  const placeHolderCount = Array(10).fill(0).map((_, i) => i);

  return (
    <section className="row">
      <ListGroup className="col-lg-6 col-md-6 col-12">
        <div className={style.customDesign}>
          <h2
            className={
              style.customHeading +
              " d-flex justify-content-center align-items-start"
            }>
            <img
              src={users}
              style={{ width: "29px", height: "29px", marginRight: "4px" }}
              alt=""
            />
            All Users
          </h2>
          {placeholder
            ? placeHolderCount.map((item) => {
                return <PlaceHolder key={item} id={item} />;
              })
            : Users.map((user) => <User key={user.id} user={user} />)}
        </div>
      </ListGroup>
      <div className="col-lg-6 col-md-6 col-12">
        <h2 className="bg-warning my-3">All Users</h2>
      </div>
    </section>
  );
};

export default Users;
