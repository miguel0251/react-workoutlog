import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
  const [email, setEmail] = useState(''); //2
  const [password, setPassword] = useState(''); //2

  const handleSubmit = (Event) => {
    Event.preventDefault();
    fetch('http://localhost:8080/user/register', {
      method: 'POST',
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
    //console.log(username, password);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Username</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          ></Input>
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
