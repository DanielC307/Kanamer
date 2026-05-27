import './quadro.styles.css'

export const Quadro = ({children}) => {
    return(
        <div className='quadro-container'>
            {children}
        </div>
    )
}