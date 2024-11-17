import './App.css';
import Person from './components/persons/Person';

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const [showIndex, setShowIndex] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/search/person?query=spielberg&api_key=c7c253aca4a4b122a8ae976ffc77e0b4')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  useEffect(() => {
if (selectedPerson){
    fetch(`https://api.themoviedb.org/3/person/${selectedPerson.id}/images?api_key=c7c253aca4a4b122a8ae976ffc77e0b4`)
      .then((response) => response.json())
      .then((data) => setImages(data.profiles))}
  }, [selectedPerson]);

  
  useEffect(() => {
    if (data.length > 0) {
      setSelectedPerson(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const newIndex = data.map((_, index) => index);
      setShowIndex(newIndex);
    }
  }, [data]);

  const handleClick = (n) => {
    setSelectedPerson(data[n]);
    setSelectedIndex(n);
    console.log(n);
  };

  return (
    <>
      <Person person={selectedPerson} images={images} />



      <button onClick={() => handleClick(showIndex[0])}>
        {showIndex[0] + 1}
      </button>

      {selectedIndex > -1 && (
        <>
          {selectedIndex === 0 ? (
            <>
              <button onClick={() => handleClick(selectedIndex + 1)}>
                {selectedIndex + 2}
              </button> {/* n + 1 */}
              <button onClick={() => handleClick(selectedIndex + 2)}>
                {selectedIndex + 3}
              </button> {/* n + 2 */}
            </>
          ) : (
            <>
              {selectedIndex > 1 ? (
                
                <>
                  {selectedIndex > 3 ? (
                      <div>...</div>)
                      : null}

                    {selectedIndex > 2 ? (
                        <button onClick={() => handleClick(selectedIndex - 2)}>
                        {selectedIndex-1}
                      </button> 
                    ) : null}

                  <button onClick={() => handleClick(selectedIndex - 1)}>
                    {selectedIndex}
                  </button> {/* n - 1 */}
       

            
                </>
              ) : null}

              <button onClick={() => handleClick(selectedIndex)}>
                {selectedIndex + 1}
              </button> {/* n */}

              {selectedIndex < showIndex.length - 2 ? (
              <button onClick={() => handleClick(selectedIndex + 1)}>
                {selectedIndex + 2}
              </button>
              ) : null}

              {selectedIndex < showIndex.length - 3 ? (
              <button onClick={() => handleClick(selectedIndex + 2)}>
                {selectedIndex + 3}
              </button>
              ) : null}
            </>
          )}
        </>
      )}

      {selectedIndex < showIndex.length - 4 ? <div>...</div> : null}

      
      {selectedIndex === showIndex.length-1 ? null : (
      <button onClick={() => handleClick(showIndex.length - 1)}>
        {showIndex.length}
      </button>
      )}


    </>
  );
}

export default App;
