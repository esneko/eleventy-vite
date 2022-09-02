import { useState } from 'react'

export default ({ start }) => {
  const [state] = useState(start)
  return `Counter: ${state}`
}
