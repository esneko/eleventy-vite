import { useState } from 'react'

export const Counter = ({ start }) => {
  const [state] = useState(start)
  return `Counter: ${state}`
}
