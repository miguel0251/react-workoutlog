import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState('');
  const [definition, setDefinition] = useState('');
  const [results, setResults] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/workoutlog/create', {
      method: 'POST',
      body: JSON.stringify({
        workoutlog: {
          description: description,
          definition: definition,
          results: results,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setDescription('');
        setDefinition('');
        setResults('');
        props.fetchWorkouts();
      });
  };

  return (
    <>
      <h3>Log a Workout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description" />
          <Input
            type="select"
            name="definition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <option value=" ">Select: Upper, Core or Lower body</option>
            <option value="Upper">Upper</option>
            <option value="Core">Core</option>
            <option value="Lower">Lower</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="definition" />
          <Input
            type="select"
            name="definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          >
            <option value=" ">Select: Time, Weight or Distance</option>
            <option value="Time">Time</option>
            <option value="Weight">Weight</option>
            <option value="Distance">Distance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="results" />
          <Input
            type="select"
            name="results"
            value={results}
            onChange={(e) => setResults(e.target.value)}
          >
            <option value=" ">Select: Intense, Moderate or Casual</option>
            <option value="Intense">Intense</option>
            <option value="Moderate">Moderate</option>
            <option value="Casual">Casual</option>
          </Input>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

export default WorkoutCreate;
