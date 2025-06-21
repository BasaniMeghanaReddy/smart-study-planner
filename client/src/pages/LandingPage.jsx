import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Smart Study Planner 📚✨
      </Typography>
      <Typography variant="h6" paragraph>
        Organize your study schedule, plan exams, and let AI create your perfect plan.
      </Typography>
      <Button
        component={Link}
        to="/login"
        variant="contained"
        size="large"
      >
        Get Started
      </Button>
    </Container>
  );
}
