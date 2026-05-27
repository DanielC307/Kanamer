import { useState } from 'react'
import './App.css'
import { Titulo } from './components/Titulo'

function App() {
  
  const [tasks, setTasks] = useState([
  { id: 1, titulo: 'Ajustar Iluminação', categoria: 'A Fazer' },
  { id: 2, titulo: 'Jogar com os Subs', categoria: 'Em Live' }
]);

  return (
    <>
      <Titulo>
        Kanamer
      </Titulo>
    </>
  )
}

export default App
