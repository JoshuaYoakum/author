import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory, useParams} from "react-router-dom"

const EditAuthor = () => {
    const {id} = useParams()
    const [authorname, setAuthorname] = useState("")
    const history =useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
          .then(res => {
            const author = res.data
            setAuthorname(author.authorname)
          })
          .catch(err => console.log(err))
      }, [])

      const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorname})
          .then(res=>history.push("/"))
          .catch(err=>console.log(err))
      }

      const handleDelete =()=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
          .then(res=>history.push("/"))
          .catch(err=>console.log(err))
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Authors Name</label>
                <input type="text" name="authorname" value={authorname}
                onChange={e=>setAuthorname(e.target.value)} className="form-control"/>
            </div>
            <button className='btn btn-primary btn-block'> edit author</button>
        </form>
    <button className="btn btn-danger btn-block" onClick={handleDelete}>Delete</button>
    </div>
    )  
}

export default EditAuthor

