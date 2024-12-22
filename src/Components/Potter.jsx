





import React, { useState, useEffect } from 'react';

const Potter = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.slice(0, 10).map((char) => (
            <li key={char.name}>
              <img
                src={char.image || 'https://via.placeholder.com/150'}
                alt={char.name}
                style={{ width: '150px', height: '200px' }}
              />
              <p>{char.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Potter;





