import React,{useContext} from 'react';
import {ContextForm} from '../App'


const DisplayList = ({item}) =>{
    const { deleteItem,findItem } = useContext(ContextForm);

   
    return(
        <>
           <li >{item.title} 
           <button className='btnDel' onClick={() => deleteItem(item.id)}>delete</button>
           <button className='btnEdt' onClick={() =>findItem(item.id)}>Edit</button></li>
        </>

    );
}

export default DisplayList;