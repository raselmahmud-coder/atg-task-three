import React, { useEffect, useState } from "react";
import saj from "../../images/saj.jpg";
import axios from "axios";
import "./single.scss";
import SingleUserPlaceHolder from "../PlaceHolder/SingleUserPlaceHolder";

const UserDetail = (props) => {
  const [placeholder, setPlaceholder] = useState(true);
  const [user, setUser] = useState([{}]);
  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `https://602e7c2c4410730017c50b9d.mockapi.io/users/${props.userId}`,
      );
      setUser([{ ...response.data }]);
      setPlaceholder(false);
    }
    getUser();
  }, [props.userId]);

  return (
    <div>
      {placeholder ? (
        <SingleUserPlaceHolder />
      ) : (
        user?.map((user, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center">
              <div className="shape mt-2">
                <img
                  src={saj}
                  alt=""
                  className="rounded-circle d-block mx-auto mt-2 shadow-lg"
                  style={{
                    width: "85px",
                    height: "85px",
                    border: "1.5px solid red",
                  }}
                />
              </div>
            </div>
            <p className="text-center text-uppercase">
              @{user?.profile?.username}
            </p>
            <p className="text-capitalize text-center">
              Job Title: {user?.jobTitle}
            </p>
            <div className="rainbow">
              <p className="rounded-3 p-2">
                First Name: {user?.profile?.firstName}
              </p>
              <p className="rounded-3 p-2">
                Last Name: {user?.profile?.lastName}
              </p>

              <p className="rounded-3 p-2">Bio: {user?.Bio}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserDetail;
