// Import react and the custom hooks
import React from 'react';
import ExpiredNotice from './ExpiredNotice';
import ShowCounter from './ShowCounter';
import { useCountdown } from './hooks/useCountdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


// Create a CountdownTimer component and add variables to hold the days, hours, minutes, and seconds values returned from the useCountdown hook
const CountdownTimer = ({ targetDate }) => {
 const [days, hours, minutes, seconds] = useCountdown(targetDate);

//  Return the JSX to display the countdown timer, this function will return the ExpiredNotice component if the countdown has finished,
//  otherwise it will return the ShowCounter component
// The component below display's the simple text stating the purpose of the timer, and the countdown box itself.

 return (
 <Container fluid className="countdown-container">
 <Row className="justify-content-center align-items-center">
   <Col xs={12} sm={8} md={6}>
     <h1 className="title">Countdown to Tom's Retirement</h1>
     <Card className="border-0 shadow-lg mt-4"> 
       {days + hours + minutes + seconds <= 0 ? (
         <Card.Body className="d-flex flex-column justify-content-center align-items-center">
           <ExpiredNotice />
         </Card.Body>
       ) : (
         <Card.Body className="d-flex flex-column justify-content-center align-items-center">
           <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
         </Card.Body>
       )}
     </Card>
   </Col>
 </Row>
 </Container>
 );
};

export default CountdownTimer;
