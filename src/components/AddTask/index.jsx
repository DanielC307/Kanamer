import { Button } from '../Button'
import './addtask.styles.css'

export const AddTask = ({aoSubmeter}) => {

    return (
        <div className='form-cadastro'>
            <form onSubmit={aoSubmeter} className='cadastro'>
                <p>Cadastre uma nova Tarefa</p>
                <input type="text" className='input-tarefa' />
                <Button>
                    Cadastrar Tarefa
                </Button>
            </form>
        </div>

    )
}