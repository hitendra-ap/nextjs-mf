import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the initial count from the server when the component mounts
    fetch('http://localhost:3000/api/counter')
      .then(response => response.json())
      .then(data => setCount(data.counter))
      .catch(error => console.error('Error fetching initial count:', error));
  }, []);

  const handleIncrement = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/counter', {
        method: 'POST',
      });
      const data = await response.json();
      setCount(data.counter);
    } catch (error) {
      console.error('Error incrementing counter:', error);
    }
  };

  const handleDecrement = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/counter', {
          method: 'PUT',
        });
        const data = await response.json();
        setCount(data.counter);
      } catch (error) {
        console.error('Error decrementing counter:', error);
      }
  };

  const handleReset = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/counter', {
        method: 'DELETE',
      });
      const data = await response.json();
      setCount(data.counter);
    } catch (error) {
      console.error('Error resetting counter:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button className={styles.button} onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset} style={{ marginRight: '10px' }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
