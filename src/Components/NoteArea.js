import React, { useState } from "react";
import '../CSS/Styles.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";



function NoteArea(props){
    const [isExpanded, setExpanded] = useState(false);
    
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
       } 

    function handleChange(event){

        const {name,value} = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand() {
        setExpanded(true);
      }

    return(
        <div className="NoteArea">
            <form className="create_notes">
                
                {isExpanded && (<input type="text" name="title" placeholder="Title" onChange={handleChange}
                value={note.title}/>)}
                <textarea name="content" onClick={expand}
                value={note.content} rows="5" placeholder="Take a Note....." onChange={handleChange}/>
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon/>
                </Fab>
                </Zoom>
            </form>
            
        </div>
    );
}
export default NoteArea;