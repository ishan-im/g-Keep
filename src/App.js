import Header from "./components/Header";

import Count from "./components/Count";

import CreateInput from "./components/CreateInput";

import Note from "./components/Note";

import Footer from "./components/Footer";

import {useState} from 'react'


function App() {
  
  const [note,setNote] = useState([])

  const addNote = (newNote) =>{

    setNote((preValue)=>{

      return [...preValue,newNote]

    })

  }


  const deleteNote= (id)=>{

    setNote((preValue)=>{

      return [...preValue.filter((note,index)=> index !== id)]

    })

  }

  return (
    <div className="App">

      <Header/>
      <Count count={note.length === 0 ? 'Empty' : `Showing ${note.length} notes`}/>
      <CreateInput onAdd={addNote}/>
      {
        note.map((note,index)=>{

          return <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          />

        })
      }
      
      <Footer/>
    </div>
  );
}

export default App;
