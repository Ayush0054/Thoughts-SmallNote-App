
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function handleClick(event){
        props.onDelete(props.id)
        event.preventDefault();
    }
    return(

        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button  onClick={handleClick} > <DeleteIcon color='primary' /></button>
        </div>    
     
    );
}
export default Note;