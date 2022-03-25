import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"

const CreateAuthor = () => {
    const [authorname, setAuthorname] = useState("")
    const history = useHistory()
    const [error, setError] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors/new`, {authorname})
            .then(res=> history.push("/"))
            .catch(err=> {
                const errResponse = err.response.data.errors
                console.log(errResponse)
                let errArr =[]
                for(const key of Object.keys(errResponse)){
                errArr.push(errResponse[key].message)
                }
                setError(errArr)
            })
    }
    const clearForm =() =>{
        setAuthorname("")
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Authors Name</label>
                <input type="text" name="authorname" value={authorname}
                onChange={e=>setAuthorname(e.target.value)} className="form-control"/>
            </div>
            <button className='btn btn-primary btn-block'> Create a new Author!</button>
        <button type="button" className = 'btn btn-default btn-block' onClick={clearForm}> Cancel</button>
    </form>
    {
        error.map((err, i)=>(
        <p style={{color:"red"}} key={i}> {err}</p>
        ))
    }
    </div>
    )
}

export default CreateAuthor