/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import APIHandler from './lib/APIHandler'
import Home from './pages/Home'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    APIHandler.get('/test')
      .then(response => {
        console.log("Api Response", response.data);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>
      <Home />
      <div className="toast">
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
      </div>      
    </>
  );
}
  
export default App