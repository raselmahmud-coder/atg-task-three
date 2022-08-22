import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import placeholder from '../../images/placeholder.png';

const SingleUserPlaceHolder = () => {

  return (
    <div className="p-4">
      <Card.Img variant="top" src={placeholder} style={{width:"60%", height:'250px'}} className="mx-auto d-block pb-2" />
       <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={12} size="lg"/>
      </Placeholder>
      
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={4} size="lg" /> <Placeholder xs={7} size="lg" />
          <Placeholder xs={6} size="lg" /> <Placeholder xs={5} size="lg" />
          <Placeholder xs={4} size="lg" /> <Placeholder xs={5} size="lg" />
          <Placeholder xs={5} size="lg" /> <Placeholder xs={6} size="lg" />
      </Placeholder>
      
       
    </div>
  );
};

export default SingleUserPlaceHolder;
