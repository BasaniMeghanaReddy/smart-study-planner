import React from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField label="Email" variant="outlined" fullWidth required />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button variant="contained" size="large">
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
