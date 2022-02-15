import {useState,useEffect} from 'react';
import CompC from './CompC';

function CompB(){



    return(
       <div>
         <h1>Component B</h1>  
         <CompC/>

       </div>
    );


}

export default CompB;