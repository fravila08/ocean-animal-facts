import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { animals } from '../components/animalFacts'
function App() {
  const background=<img className="background" alt='ocean' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtrdeOZp_tNQzg1MGhOJ-iBbgjI8Lt-rblA&usqp=CAU"/>
  const anNmalFacts=<h1 className='title'>AnimalFacts</h1>

  return (
    <div className="App">
      {background}
      {anNmalFacts}
    </div>
  )
}

export default App
