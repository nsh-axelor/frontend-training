import React, { useContext, useState } from 'react';
import Context from '../../Context/Context';

const selected_style = {backgroundColor:"red",color:"white"}
function Cateogry({value}) {  
    const [cancel,setCancel] = useState(false)
    const appState = useContext(Context)
    const [category,setCategory] = appState.category;  
  return <div className='category' style={category === value ? selected_style : {}} onMouseOver={() => setCancel(true)} onMouseLeave={() => setCancel(false)} onClick={() => setCategory(value)}>{value}</div>;
}

export default Cateogry;
