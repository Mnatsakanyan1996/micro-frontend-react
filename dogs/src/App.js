import { useState } from 'react';

import useMount from './hooks/useMount';

const GET_DOGS_API = 'https://dog.ceo/api/breeds/image/random';

function App() {

  const [dogImagePath, setDogImagePath] = useState();

  const getDogImagePath = async () => {
    const { message } = await (await fetch(GET_DOGS_API)).json();
    setDogImagePath(message);
  };

  const getNewDogImage = () => {
    setDogImagePath(null);
    getDogImagePath();
  };

  useMount(() => {
    getDogImagePath();
  });

  return (
    <div className="dogs-app">
      <div className="header">
        <button onClick={getNewDogImage}>New Dog</button>
      </div>
      <div className="dog-image">
        {dogImagePath
          ? <img src={dogImagePath} width="400px" alt="dog" />
          : <h2>Loading Image...</h2>}
      </div>
    </div>
  );
}

export default App;
