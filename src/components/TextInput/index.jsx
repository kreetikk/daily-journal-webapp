import React from 'react'

const TextInput = ({ rows, label, ...props }) => (
  <fieldset className={`form-group${rows ? ' form-textarea' : ''}`}>
    <label htmlFor={label}>{label}</label>
    {rows ? (
      <textarea id={label} rows={rows} className="form-control" {...props} />
    ) : (
      <input id={label} className="form-control" {...props} />
    )}
  </fieldset>
)

export default TextInput
