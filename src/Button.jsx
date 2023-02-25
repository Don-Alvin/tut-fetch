import React from 'react'

const Button = ({buttonText, setreqType}) => {
  return (
    <button
      type='button'
      onClick={() => setreqType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button