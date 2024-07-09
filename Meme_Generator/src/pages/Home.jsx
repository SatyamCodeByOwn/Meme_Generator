import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/Memes';

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then(memes => {
      setData(memes.data.memes); // Ensure that memes.data.memes is the correct path
    });
  }, []);

  return (
    <div className='row'>
      {
        data.map(e => <MemeCard key={e.id} img={e.url} title={e.name} />)
      }
    </div>
  );
}

export default Homepage;
