import Header from "./Components/Header.js";
import NoteArea from "./Components/NoteArea.js";
import React, { useState } from "react";
import Notes from "./Components/Notes.js";



function App() {

  const [notes,setNotes]=useState([]);

  function addNote(newnote)
  {
    setNotes(prevNotes =>{
      return[...prevNotes,newnote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header/>
      <NoteArea onAdd={addNote}/>
      {
        notes.map((noteItem, index) => {
          return(
            <Notes key={index} id={index} 
            title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
          );
        })
      }
      
    </div>
  );
}

export default App;
