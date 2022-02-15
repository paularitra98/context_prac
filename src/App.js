
import {useState,createContext} from 'react';
import CompA from './pages/CompA';

const Abc=createContext();


function App() {
  let [name,setName]=useState({name:'rff',id:'1'});
  
  return (
    <div>

      <Abc.Provider value={name}>

      <CompA name="wjdfj"/>
      
      </Abc.Provider>
      <h1>I am APP </h1>
      
    </div>
  );
}

export default App;
export {Abc};
