
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'
import IconButton from '@mui/material/IconButton';

export default function Note({title,content, onDelete, id}) {
  return (

    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <IconButton aria-label="delete" onClick={()=> onDelete(id)}>
         <DeleteIcon />
        </IconButton>
    </div>
  )
}
