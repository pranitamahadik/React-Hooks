import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
        console.log(response)
        setPost(response.data)

    })
    .catch(error => {
        console.log(error)
    })
  }, [id])

  return (
    <div>
        <input type="text" value={id} onChange={ e => setId(e.target.value)}> 
        </input>
      <ul>{post.title}</ul>
    </div>
  )
}

export default DataFetchingOne
