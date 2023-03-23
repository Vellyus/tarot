import './App.css'
import { Intro } from './Intro'
import { Reading } from './Reading'


function App() {
  return (
    <main>
      <Intro />
      <Reading />
      <div className='wrapper'></div>
      <div className='overlay'></div>
    </main>
  )
}

export default App

