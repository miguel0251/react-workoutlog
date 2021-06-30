import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState('');
  const [definition, setDefinition] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/log', {
      method: 'POST',
      body: JSON.stringify({
        log: {
          description: description,
          definition: definition,
          result: result,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setDescription('');
        setDefinition('');
        setResult('');
        props.fetchWorkouts();
      });
  };

  return (
    <>
      <h3>Log a Workout</h3>
      <Form>
        <FormGroup>
          <Label htmlFor="description"></Label>
          <Input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="definition"></Label>
          <Input
            type="select"
            name="definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          >
            <option value="Time">Time</option>
            <option value="Weight">Weight</option>
            <option value="Distance">Distance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="result"></Label>
          <Input
            name="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          ></Input>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

export default WorkoutCreate;
