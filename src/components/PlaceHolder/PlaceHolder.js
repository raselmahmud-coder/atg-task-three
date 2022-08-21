import React from "react";
import { ListGroup } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
const PlaceHolder = ({id}) => {


  return (
    <>
      {id % 2 === 0 ? (
        <ListGroup.Item action variant="secondary" className="my-1">
          <Placeholder as={ListGroup.Item} animation="glow" style={{backgroundColor:"#e2e3e5"}}>
            <Placeholder xs={12} />
          </Placeholder>
          
        </ListGroup.Item>
      ) : (
        <ListGroup.Item action variant="success">
          <Placeholder as={ListGroup.Item} animation="glow" style={{backgroundColor:"#d1e7dd"}}>
            <Placeholder xs={12} className="bg-success"/>
          </Placeholder>
        </ListGroup.Item>
          )}
          
    </>
  );
};

export default PlaceHolder;
