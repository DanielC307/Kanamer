import './button.styles.css'

export const Button = ({children, ...rest}) => {
    return(
        <button {...rest} className='btn'>
            {children}
        </button>
    )
}