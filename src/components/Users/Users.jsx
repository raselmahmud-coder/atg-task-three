import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import User from "./User";
import users from "../../images/users.png";
import user from "../../images/user.png";
import style from "./customStyle.module.css";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import UserDetail from "./UserDetail";

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [placeholder, setPlaceholder] = useState(false);
  const [userId, setUserId] = useState(null);

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

  const placeHolderCount = Array(10)
    .fill(0)
    .map((_, i) => i);

  const handleSingleUser = (userId) => {
    // props.history.push(`/users/${user.id}`);
    setUserId(userId);
    // console.log(userId)
  };
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
              style={{
                width: "29px",
                height: "29px",
                marginRight: "4px",
                borderRadius: "50%",
              }}
              alt=""
            />
            All Users
          </h2>
          {placeholder
            ? placeHolderCount.map((item) => {
                return <PlaceHolder key={item} id={item} />;
              })
            : Users.map((user, index) => (
                <User
                  index={index}
                  key={user.id}
                  handleSingleUser={handleSingleUser}
                  user={user}
                />
              ))}
        </div>
      </ListGroup>
      <div className="col-lg-6 col-md-6 col-12">
        {userId && (
          <div className={style.customDesign}>
            <h2
              className={
                style.customHeading +
                " d-flex justify-content-center align-items-start"
              }>
              <img
                src={user}
                style={{
                  width: "29px",
                  height: "29px",
                  marginRight: "4px",
                  borderRadius: "50%",
                }}
                alt=""
              />
              User Details
            </h2>
            <UserDetail userId={userId} />
            {/* <SingleUserPlaceHolder userId={userId} /> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Users;
