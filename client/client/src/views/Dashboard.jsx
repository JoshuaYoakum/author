import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors] = useState()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(res=>{
                
                setAuthors(res.data);
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/authors/delete/${deleteId}`)
        .then(res=>{
            const filteredAuthors = authors.filter((author)=>author._id !== deleteId)
            setAuthors(filteredAuthors)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <Link to="/authors/new"> Create a new author</Link>
        <table className='table'>
            <thead>
                <th> Name</th>
                <th colSpan={2}> Actions</th>
            </thead>
            <tbody>
                {
                    authors &&
                    authors.map((author, i)=>(
                        <tr key={i}>
                            <td> <Link to={`/authors/${author._id}`}>{author.authorname}</Link></td>
                            <td> <Link className="btn btn-success" to={`/authors/update/${author._id}`}>Edit</Link></td>
                            <td> <button className="btn btn-danger" onClick={()=>handleDelete(author._id)}>Delete (filter)</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard