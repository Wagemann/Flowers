import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useUpdateDataMutation } from "./store/dataApi"

function BootstrapInput(props) {
    const { id, placeholder, labelText, value, onChange, type } = props
  
    return(
      <div className="mb-3">
        <label htmlFor={id} className="form-label">{labelText}</label>
        <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
      </div>
    )
  }

function UpdateForm(_props){

    const [updateData, result] = useUpdateDataMutation();
    const navigate = useNavigate()
    const {id} = useParams();
    const url = 'http://localhost:4000/api/vi/data/:id'
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
     

    async function handleSubmit(e){
        e.preventDefault();
        updateData({title, body, userId});

        if (result.isSuccess){
            navigate("/");
        } else if (result.isError) {
            setError(result.error)
        }
    }
    return (
            <form onSubmit={handleSubmit} action={url} >
              <BootstrapInput
                id="title"
                placeholder="Title of Post"
                labelText="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"/>
              <BootstrapInput
                id="body"
                placeholder="Body of post"
                labelText="body"
                value={body}
                onChange={e => setBody(e.target.value)}
                type="text"/>
              <BootstrapInput
                id="userId"
                placeholder="User Id"
                labelText="user id"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                type="text"/>
              { !isPending && <button 
                className='form-field'
                type='submit'>Post</button>}
              { isPending && <button disabled
                className='form-field'
                type='submit'>Posting...</button>}
            </form>
          )
}

export default UpdateForm;