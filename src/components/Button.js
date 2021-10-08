import React from 'react'

const Button = (props) => {
    const { color, text, onClick } = props
    
    return (
        <button 
            onClick={onClick}
            style={{ 
                backgroundColor: color,
                padding: 8,
                marginInline: 8,
            }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
