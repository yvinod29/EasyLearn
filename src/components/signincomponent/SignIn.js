import React from 'react';
import './SignIn.css';  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function SignIn() {
  
  const handleSignIn = (e) => {
    e.preventDefault();
    
  };
  

  return (
    <div>
      <div className="signin-container">
        <h1 className="easy-learn-text">Easy Learn</h1>
        <p className="tagline">Connect with us and upgrade your skills here.</p>
      </div>
      <div style={{ marginLeft: '500px', marginRight: '500px' }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" >
              Sign In
            </Typography>
            <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                required
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'green',
                    color: 'black',
                    width: '60px',
                    borderRadius: '2px',
                    marginLeft:'30px',
                    marginTop:'3px'
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link to="/signup" style={{ textDecoration: 'none'  }}>
                    Sign Up
                  </Link>
                </Typography>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignIn;
