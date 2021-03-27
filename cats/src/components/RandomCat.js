import { useState } from 'react';

import useMount from '../hooks/useMount';

const GET_CATS_API = 'https://aws.random.cat/meow';

function RandomCat() {

  const [catImagePath, setCatImagePath] = useState();

  const getCatImagePath = async () => {
    const { file } = await (await fetch(GET_CATS_API)).json();
    setCatImagePath(file);
  };

  const getNewCatImage = () => {
    setCatImagePath(null);
    getCatImagePath();
  };

  useMount(() => {
    getCatImagePath();
  });

  return (
    <div className="cats-app">
      <div className="header">
        <button onClick={getNewCatImage}>New cat</button>
      </div>
      <div className="cat-image">
        {catImagePath
          ? <img src={catImagePath} width="400px" alt="cat" />
          : <h2>Loading Image...</h2>}
      </div>
    </div>
  );
}

export default RandomCat;
