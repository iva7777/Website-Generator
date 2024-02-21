import { useState } from 'react'
import './App.css'
import Form from './Form';
import Site from './Site';

function App() {
  const [generated, setGenerated] = useState(false);
  const [raw, setRaw] = useState("");

  const setChangeOfRaw = (value) => {
    setRaw(value);
  }

  const setGeneratedToTrue = () => {
    setGenerated(true);
  }
  return(
    generated ? <Site raw={raw}/> : <Form setGenerated={setGeneratedToTrue} setRaw={setChangeOfRaw}/>
  );

}

export default App

/*to-do:
- button REGENERATE
- make the design better
- make smth like a service /search for architecture -> handleClick
- loading animation */
