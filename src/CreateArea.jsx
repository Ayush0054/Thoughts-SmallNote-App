import React, { useState } from "react";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [ isexpanded,setIsexpanded] = useState(false);
 
  function expand(){
    setIsexpanded(true);
  }

  const [note,setNote] = useState({
    title:"",
    content:""
  }) ;
function handleChange(event){
const {name,value} = event.target;

setNote(prevNote => {
  return{
    ...prevNote,
    [name]:value
  }
})
}

function submitNote(event){
  props.onAdd(note);
  setNote({
    title:"",
    content:""
  });

  event.preventDefault();
}
  return (
    <div>
      <form className="create-note">
      {isexpanded ?  <input name="title" placeholder="Title" value={note.title} onChange={handleChange} /> : null}
       
        <textarea maxlength="200" name="content" value={note.content} onClick={expand} onChange={handleChange}
         placeholder="What's on your mind?" rows={isexpanded ? 3 : 1} />
        <Zoom in={isexpanded}>

        <Fab color="primary" onClick={submitNote} ><LibraryAddCheckIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;