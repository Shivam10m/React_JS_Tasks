import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';

const App = () => {
  const [person, setPerson] = useState({
    name: 'Shivam',
    age: 22,
    city: 'New Delhi'
  });

  const updatePerson = () => {
    setPerson(prev => ({
      ...prev,
      name: 'Sachin',         
      city: 'Pune'   
    }));
  };

  return (
    <Container className="mt-5">
      <Typography variant="h4" className="mb-4 text-center">Person Details Update</Typography>

      <Card className="mb-3">
        <CardContent>
          <Typography variant="h6">Name: {person.name}</Typography>
          <Typography>Age: {person.age}</Typography>
          <Typography>City: {person.city}</Typography>
        </CardContent>
      </Card>

      <div className="text-center mt-4">
        <Button variant="contained" color="secondary" onClick={updatePerson}>
          Update Name & City
        </Button>
      </div>
    </Container>
  );
};

export default App;
