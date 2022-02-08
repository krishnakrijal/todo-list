
import React, { useState } from 'react';
import uuid from 'react-uuid';
const Form = () =>{

    const [text,setText] = useState('');

    const [input,setInput] = useState([]);

    

    const handle = e =>{
        setText(e.target.value);
    }

const handleSubmit = (e) =>{
    e.preventDefault();
    setInput([...input,{id:uuid(),text}])
    setText('');
}

const clear = () =>{
    setText([]);
}
    return(
        <>
        <form  onSubmit={handleSubmit}>
            <input type='text' 
            placeholder = 'Enter you text here' 
            onChange={handle}
            value={text}/>
            <button type="submit">Add</button>
            <button onChange={clear}>Clear</button>
        </form>
        <div>
            <ol>
                {
                  input.map((int,id)=> <li key={int.id}>{int.text}</li>)

                }
                
            </ol>
        </div>
        </>
        
    );

}
 
export default Form;