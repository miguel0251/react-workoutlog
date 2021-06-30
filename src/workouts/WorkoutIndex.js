import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const WorkoutIndex = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const fetchWorkouts = () => {
    fetch('http://localhost:8080/workoutlog/mine', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setWorkouts(logData);
        console.log(logData);
      });
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <WorkoutCreate
            fetchWorkouts={fetchWorkouts}
            token={props.token}
          ></WorkoutCreate>
        </Col>
        <Col md="9">
          <WorkoutTable
            workouts={workouts}
            fetchWorkouts={fetchWorkouts}
            token={props.token}
          ></WorkoutTable>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutIndex;
