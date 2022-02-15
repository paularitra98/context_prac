import {useState,useEffect} from 'react';
import CompB from './CompB';

function CompA(props){



    return(
       <div>
         <h1>Component A {props.name}</h1>  
         <CompB/>

       </div>
    );


}

export default CompA;