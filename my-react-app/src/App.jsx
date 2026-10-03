import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000';

function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((setHealth))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>My Idea</h1>
      {error && <p>Could not reach the API: {error}</p>}
      {!health && !error && <p>Checking the server...</p>}
      {health && <p>{JSON.stringify(health)}</p>}
    </main>
  );
}

export default App;