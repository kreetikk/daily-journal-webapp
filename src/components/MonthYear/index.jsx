import React from 'react'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const MonthYear = ({ currentDate, previousDate }) => {
  const date = new Date(currentDate)
  let Component = (
    <h2 style={{ margin: '1.5em 0 1em 0' }}>
      {monthNames[date.getMonth()]}, {date.getFullYear()}
    </h2>
  )
  if (previousDate) {
    const date2 = new Date(previousDate)
    const isNewMonth = date.getMonth() !== date2.getMonth()
    if (!isNewMonth) {
      Component = <></>
    }
  }

  return Component
}

export default MonthYear
