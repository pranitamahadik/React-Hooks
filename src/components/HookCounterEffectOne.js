import React, {useEffect, useState}from 'react'

function HookCounterEffectOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    }, [count])
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={()=> setCount(count + 1)}> Click {count} times</button>
    </div>
  )
}

export default HookCounterEffectOne
