import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const WorkoutCreate = (props) => {
  const [description, setDescription] = useState('');
  const [definition, setDefinition] = useState('');
  const [result, setResult] = useState('');

  return <p>WorkoutCreate Component</p>;
};

export default WorkoutCreate;
