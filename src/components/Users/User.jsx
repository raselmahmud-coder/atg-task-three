import React, { useRef, useState } from "react";
import { ListGroup } from "react-bootstrap";
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
              src={`https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random()*9)+9}.jpg`}
              className="rounded-circle"
              alt=""
              style={{ width: "45px", height: "45px" }}
            />
            <h4 style={{ backgroundColor: "#e2e3e5" }}>
              {user?.profile?.firstName} {user?.profile?.lastName}
            </h4>

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
              src={`https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random()*9)+9}.jpg`}
              className="rounded-circle"
              style={{ width: "45px", height: "45px" }}
              alt=""
            />
            <h4 style={{ backgroundColor: "#d1e7dd" }}>
              {user?.profile?.firstName}
            </h4>

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
