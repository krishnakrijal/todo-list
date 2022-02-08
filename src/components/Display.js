import React,{useContext} from 'react';
import DisplayList from './DisplayList';
import {ContextForm} from '../App';

const Display = () =>{
    const {items}= useContext(ContextForm);
    return (
     <>
     <ul>
         {items.map((item) => <DisplayList key = {item.id} item = {item}/>)}
     </ul>
     </>
    );
}

export default Display;