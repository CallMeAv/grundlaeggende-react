import React, { useState, useEffect } from 'react'
import Person from './compo/person/Person'

function App() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.title = isVisible ? 'Personer Vises' : 'Personer Skjult.'

  }, [isVisible])

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      {isVisible && (
        <>
          <Person name="Alice" />
          <Person name="Alex" />
          <Person name="Bob" />
        </>
      )}
    </div>
  );
}

export default App;
