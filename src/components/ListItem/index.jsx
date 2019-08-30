import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const ListItem = ({ item: { title, content, createdAt }, to }) => {
  const day = new Date(createdAt).getDate()
  return (
    <Link to={to} className="media list-item">
      <div className="media-left">
        <div className="avatarholder">{day}</div>
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
        <div className="media-content">{content}</div>
      </div>
    </Link>
  )
}

export default ListItem
