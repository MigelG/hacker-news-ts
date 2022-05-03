import './MyButton.css';

function MyButton({ children, ...props }) {
    return (
        <button
            className='button'
            type='button'
            {...props} >
            {children}
        </button>
    )
}

export default MyButton;