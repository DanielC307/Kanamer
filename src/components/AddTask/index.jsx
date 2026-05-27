import './addtask.styles.css'

export const AddTask = () => {
    return(
        <form className='cadastro'>
            <p>Cadastre uma nova Tarefa</p>
            <input type="text" className='input-tarefa'/>
            <button className='btn-submit'>Cadastrar</button>
        </form>
    )
}