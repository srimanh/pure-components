import { useState } from 'react'
import SimpleCounter from "./components/SimpleCounterComponent";
import PureComp from './components/PureCounterComponent';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SimpleCounter/>
      <PureComp/>
    </div>
  )
}

export default App
