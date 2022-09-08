import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store';
import './AuthorizeForm.css';

export const AuthorizeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const authorize = () => {
    if (email === 'admin@mail.com' && password === 'justdoit123') {
      dispatch(actions.setAuthStatus(true));
      localStorage.setItem(
        'authStatus',
        JSON.stringify(true),
      );
      window.location.hash = '/recipes';
    } else {
      setError(true);
    }
  };

  return (
    <form className='auth-form'>
      <h2 className='auth-form__title'>
        Welcome to Recipe App!
      </h2>
      <TextField 
        required
        value={email}
        label="email" 
        variant="standard" 
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField 
        required
        value={password}
        label="Password" 
        variant="standard" 
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <p>Wrong login and/or password!</p>}
      <Button 
        variant="contained"
        onClick={authorize}
      >
        Authorize
      </Button>
    </form>
  );
};