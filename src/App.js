import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    setLoading(true)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (

2
  );
}

export default App;
