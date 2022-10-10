import * as React from 'react'

export const Cart = ({ start = 0, currency = 'EUR' }) => {
  const [state] = React.useState(start)
  return (
    <>
      Total: {state} {currency}
    </>
  )
}
