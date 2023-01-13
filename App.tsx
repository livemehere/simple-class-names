import cn from "./src";
import './style.css'
import {useState} from "react";

function App(){
    const [active, setActive] = useState(false);
    return <div className={cn('hi','red', {active:'1'})}>
        <h1>HIHIH</h1>
        <button onClick={()=> setActive(prev => !prev)}>click</button>
    </div>
}

export default App;