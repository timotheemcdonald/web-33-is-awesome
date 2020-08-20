import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Timmy Is Awesome</h1>
      <h2>
        Tim McDonald is literally the best.
      </h2>
      <p>
       "Everyone loves me." - Tim 'Timmy' McDonald
      </p>
      <br />
    </main>
  );
}

export default App;
