import React, {useContext} from 'react'
import { UserContext } from '../App'

function ComponentF() {
  const user = useContext(UserContext)

  return (
    <div>
      Name - {user}
    </div>
  )
}

export default ComponentF
