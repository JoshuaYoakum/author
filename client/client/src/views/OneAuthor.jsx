import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const OneAuthor = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
          .then(res=>setAuthor(res.data))
          .catch(err=>setAuthor())
      },[])

  return (
    <>
    {
    author?
        <div>
            <h5> Name: {author.authorname}</h5>
        </div>:""
        }
        <Link to="/"> Back</Link>
    </>
  )
}

export default OneAuthor