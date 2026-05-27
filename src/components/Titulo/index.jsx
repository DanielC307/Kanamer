import './titulo.styles.css'

export const Titulo = ({children}) => {
    return(
        <header className='banner-container'>
            <h1 className='banner-titulo'>
                {children}
            </h1>
        </header>
    )
}