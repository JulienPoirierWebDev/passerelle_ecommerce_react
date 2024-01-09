import clsx from 'clsx'
import React from 'react'

function Button({variant, customClasses, children}) {

  const className = clsx({
    'text-white p-4 bg-opacity-10 bg-light-grey': variant ==="primary",
    [customClasses]: customClasses
  })

  return (
    <button className={className}>{children}</button>
    )
}

export default Button