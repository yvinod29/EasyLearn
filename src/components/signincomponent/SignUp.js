import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function SignUp() {
     const handleSignUp = (e) => {
      e.preventDefault();
     };
  
    return (
      <div>
        <div className="signup-container">
        <div className="signin-container">
        <h1 className="easy-learn-text">Easy Learn</h1>
        <p className="tagline">Connect with us and upgrade your skills here.</p>
       
        
    </div>
        
        </div>
        <div style={{ marginLeft: '400px', marginRight: '400px' }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Create an Account
              </Typography>
              <form onSubmit={handleSignUp}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  type="email"
                />
                
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  required
                />
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  required
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'green',
                    color: 'black',
                    marginTop: 2,
                    width: '100px',
                    borderRadius: '2px',
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Already have an account?{' '}
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                  Sign In
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  