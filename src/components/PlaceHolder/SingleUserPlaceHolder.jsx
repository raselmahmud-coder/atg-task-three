import React, { useEffect, useState } from "react";
import saj from "../../images/saj.jpg";
import axios from "axios";

const SingleUserPlaceHolder = (props) => {
  console.log(props);
  const [user, setUser] = useState([{}]);
  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `https://602e7c2c4410730017c50b9d.mockapi.io/users/${props.userId}`,
      );
      setUser([{ ...response.data }]);
    }
    getUser();
  }, [props.userId]);

  console.log(user);

  return (
    <div>
      {user?.map((user, index) => (
        <div key={index}>
          <img
            src={saj}
            alt=""
            className="rounded-circle"
            style={{ width: "35px", height: "35px" }}
          />
          <p className="text-center text-uppercase">@{user?.profile?.username}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleUserPlaceHolder;
