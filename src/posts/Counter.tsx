import * as React from 'react'

export const Counter = ({ start = 0 }) => {
  const [state] = React.useState(start)
  return <>`Total: ${state}`</>
}
