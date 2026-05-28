import { useState } from 'react'
import { Button } from '../Button'
import './addtask.styles.css'

export const AddTask = ({ aoSubmeter }) => {

    const [texto, setTexto] = useState('')


    return (
        <div className='form-cadastro'>
            <form onSubmit={aoSubmeter} className='cadastro'>
                <p>Cadastre uma nova Tarefa</p>
                <input
                    type="text"
                    className='input-tarefa'
                    value={texto}
                    onChange={event => setTexto(event.target.value)} />
                <Button>
                    Cadastrar Tarefa
                </Button>
            </form>
        </div>

    )
}