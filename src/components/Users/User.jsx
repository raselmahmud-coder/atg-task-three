import React from "react";
import { ListGroup } from "react-bootstrap";
import avatar from "../../images/saj.jpg";
const User = (props) => {
  const { user } = props;
    const handleSingleUser = (userId) => {
        // props.history.push(`/users/${user.id}`);
        console.log(userId);

    }

  return (
    <>
      {user.id % 2 === 0 ? (
        <ListGroup.Item onClick={()=>handleSingleUser(user.id)} action variant="secondary" className="my-1">
          <div className="d-flex justify-content-between">
            <img
              src={avatar}
              className="rounded-circle"
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
            <h3>
              {user.profile.firstName} {user.profile.lastName}
            </h3>
          </div>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item onClick={()=>handleSingleUser(user.id)} action variant="success">
          <div className="d-flex justify-content-between">
            <img
              src={avatar}
              className="rounded-circle"
              style={{ width: "35px", height: "35px" }}
              alt=""
            />
            <h3>{user.profile.firstName}</h3>
          </div>
     
                      
        </ListGroup.Item>
          )}
          
    </>
  );
};

export default User;
