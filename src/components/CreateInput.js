import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';

function CreateInput({onAdd}) {

    const [input, setInput] = useState({
        title: '',
        content: ''
    })


    const {title,content} = input

    const [isExpanded, setIsExpanded] = useState(false)


    const handleChange = (name)=> (e)=>{

        const value = e.target.value;
        setInput({
            ...input, [name]:value
        })

    }

    const handleSubmit  = (e) =>{

        e.preventDefault();

        onAdd(input)

        setInput({
            title: '',
            content: ''
        })
        
    }


    const handleExpanded = ()=>{

           setIsExpanded(true) 

    }


    const handleExpandClick = ()=>{

         title.trim().length === 0 ? setIsExpanded(false) : setIsExpanded(true)

    }

    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            type="text"
            value={title}
            onChange={handleChange('title')}
            placeholder="Title"
            name="title"
          />
        )}
        <p>
        <textarea
          name="content"
          value={content}
          onClick={handleExpanded}
          onChange={handleChange('content')}
          placeholder="Write your note"
          rows={isExpanded ? '3' : '1'}
        ></textarea>
        </p>

        <button type='submit'> 
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateInput