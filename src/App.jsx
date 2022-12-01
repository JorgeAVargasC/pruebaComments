import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [comments, setComments] = useState("Nothing yet")

  const getComments = async () => {
    setComments("Loading...")
    const response = await axios.get('http://18.168.197.218:3050/comments', {
      data: {
        postId: 'f8918f2e-6368-4178-a494-1e5453cdaf7a'
      },
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      console.log(response.data)
      setComments(response.data)
    }).catch((error) => {
      console.log(error)
      setComments("Error")
      
    })
  }

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => getComments()}>
          Get Comments
        </button>
        <p>
          <code>{comments}</code>
        </p>
      </div>
    </div>
  )
}

export default App
