import './App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './routes/Home';
// import First from './routes/First';
import Final from './routes/Final';

function App() {

  let token = localStorage.getItem('token');
  let loggedIn = !!token;
  
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<Home />} 
          />
          {/* <Route 
            path="/first"
            element={loggedIn ? <First /> : <Navigate to="/" />} 
          /> */}
          <Route 
            path="/final"
            element={loggedIn ? <Final /> : <Navigate to="/" />} 
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
