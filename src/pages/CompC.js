import {useState,useEffect} from 'react';
import { Abc } from '../App';

function CompC(){

    let[nm,setNm]=useState('');


    return(
       <div>

        <Abc.Consumer>
            {(obj)=>{
                setNm(obj.name);
            }

            }

        </Abc.Consumer>
         <h1>Component C {nm}</h1>  

       </div>
    );


}

export default CompC;