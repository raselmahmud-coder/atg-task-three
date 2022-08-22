import React, { useRef, useState } from "react";
import { ListGroup } from "react-bootstrap";
import avatar from "../../images/saj.jpg";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

const User = (props) => {
  const { user } = props;
  const [isActive, setIsActive] = useState(false);
  const domRef = useRef(null);

  const handleActive = () => {
    setIsActive(true);
   setTimeout(() => {
        setIsActive(false);
   }, 3000);
 
  };

  return (
    <>
      {user.id % 2 === 0 ? (
        <ListGroup.Item ref={domRef}
          onClick={() => handleActive()}
          action
          variant="secondary"
          className="my-1 onFocus">
          <div
            onClick={() => props.handleSingleUser(user.id)}
            className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#e2e3e5" }}>
            <img
              src={avatar}
              className="rounded-circle"
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
            <h3 style={{ backgroundColor: "#e2e3e5" }}>
              {user.profile.firstName} {user.profile.lastName}
            </h3>

            <img
              src={isActive ? minus : plus}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#d1e7dd",
              }}
              alt=""
            />
          </div>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item ref={domRef} onClick={(e) => handleActive(e, props.index)} action variant="success" className="onFocus">
          <div
            onClick={() => props.handleSingleUser(user.id)}
            className="d-flex justify-content-between"
            style={{ backgroundColor: "#d1e7dd" }}>
            <img
              src={avatar}
              className="rounded-circle"
              style={{ width: "35px", height: "35px" }}
              alt=""
            />
            <h3 style={{ backgroundColor: "#d1e7dd" }}>
              {user.profile.firstName}
            </h3>

            <img
              src={isActive ? minus : plus}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "#d1e7dd",
              }}
              alt=""
            />
          </div>
        </ListGroup.Item>
      )}
    </>
  );
};

export default User;
