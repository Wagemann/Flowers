import { React, useState } from "react";
import { updateTitleAndBody } from "./store/dataReducer";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

function BootstrapInput(props) {
    const { id, placeholder, labelText, value, onChange, type } = props
  
    return(
      <div className="form-group m-2">
        <label htmlFor={id} className="form-label">{labelText}</label>
        <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
      </div>
    )
  }

function UpdateForm(_props){
  

  let {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isPending] = useState(false)
  const { dataItems } = useSelector((state) => state.dataCart);
  

  
  let dataItem = dataItems[id - 1]
  const [title, setTitle] = useState(dataItem.title);
  const [body, setBody] = useState(dataItem.body); 

    async function handleSubmit(e){
        e.preventDefault();
        let updatedData = {"index": id - 1,  "updatedTitle": title, "updatedBody": body}
        dispatch(updateTitleAndBody(updatedData));
        navigate("/");
    }

    return (
            <form onSubmit={handleSubmit} >
              <BootstrapInput
                id="title"
                placeholder="Title of Post"
                labelText="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"/>
              <BootstrapInput
                id="body"
                placeholder="Body of post"
                labelText="Body"
                value={body}
                onChange={e => setBody(e.target.value)}
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