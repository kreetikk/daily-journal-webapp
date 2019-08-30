import React from 'react'

const Alert = ({ type, children }) => (
    <div style={{ marginTop: '1em'}} className={`alert alert-${type}`}>
        {children}
    </div>
)

export default Alert