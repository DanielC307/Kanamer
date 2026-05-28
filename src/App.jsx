import { useState } from 'react'
import './App.css'
import { Titulo } from './components/Titulo'
import { AddTask } from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([
  { id: 1, titulo: 'Ajustar Iluminação', categoria: 'A Fazer' },
  { id: 2, titulo: 'Jogar com os Subs', categoria: 'Em Live' }
]);

 const aoCadastrar = (novaTarefa) => {
      setTasks([...tasks, novaTarefa])
      novaTarefa.preventDefault()
      console.log(novaTarefa);
      
      
  }

  return (
    <>
      <Titulo>
        Kanamer
      </Titulo>
        <AddTask aoSubmeter = {aoCadastrar}/>
    </>
  )
}

export default App
