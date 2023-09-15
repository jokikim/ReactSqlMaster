import React from 'react'
import { classNames } from '../utils/utilFunctions'

const Button = ({ children, className, handleClick }) => {
  return (
    <button
      className={classNames(
        "bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold px-4 py-2 my-4 shadow-lg",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
