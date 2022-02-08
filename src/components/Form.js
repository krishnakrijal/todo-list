import React,{useState,useContext,useEffect} from 'react'
import {ContextForm} from '../App';

export default function () {

    const {addList,removeAll,editItem,editTask}  = useContext(ContextForm);
    const [title,setTitle]= useState('')
   
    const submitHandle = e => {
        e.preventDefault();
        if(!editItem){
        addList(title);
        setTitle('');
        }else{
            editTask(title,editItem.id)
        }
    }

    useEffect(()=>{
        editItem ? setTitle(editItem.title) :setTitle('')
    },[editItem])
   
    return (

        <div className="frm">
            <form onSubmit={submitHandle}>
                <input type="text" 
                placeholder="Add Your Task Here..."
                required
                value = {title} 
                onChange = {e => setTitle(e.target.value)}/><br></br>
                <button className="btn2" type='submit'>{editItem ? 'Edit' : 'Add'}</button>
                <button className="btn1" onClick = {removeAll}>Clear</button>
                

            </form>

        </div>
    
        
     
       

    )
}
