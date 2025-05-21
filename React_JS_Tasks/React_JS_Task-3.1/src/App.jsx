import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Simple MUI Demo</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 4 }}>
        {/* Carousel */}
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          <img src="https://source.unsplash.com/random/800x400" alt="1" />
          <img src="https://source.unsplash.com/random/801x400" alt="2" />
        </Slider>

        {/* Accordion */}
        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion Title</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Accordion Content</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Card */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Simple Card</Typography>
            <Typography>Card content goes here.</Typography>
          </CardContent>
        </Card>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <TextField
            label="Name"
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            fullWidth
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />
          <input placeholder="Uncontrolled Input" style={{ padding: '8px', width: '100%', marginBottom: '16px' }} />
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 2, bgcolor: '#eee', mt: 4 }}>
        <Typography variant="body2">© 2025 Simple App</Typography>
      </Box>
    </>
  );
}
