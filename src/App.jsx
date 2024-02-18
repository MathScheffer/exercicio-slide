import React from 'react'
import Slide from '../Components/Slide'

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
      cor: 'red',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
      cor: 'pink',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
      cor: 'magenta',
    },
    {
      id: 'slide4',
      text: 'Slide 4',
      cor: 'tomato',
    },
  ]

  return (
    <div>
      <Slide slides={slides} />
    </div>
  )
}

export default App
