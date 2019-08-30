import React from 'react'

const ButtonGroup = ({ children, ...props }) => (
  <div className="btn-group" {...props}>
    {children}
  </div>
)

export default ButtonGroup
