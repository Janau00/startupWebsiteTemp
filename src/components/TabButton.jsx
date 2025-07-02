import { Children } from "react";

export default function TabButton({Children}){
    function handleClick(){
        console.log('Hello');
    }
    return(
        <button onClick={handleClick}>{Children}</button>//if i put () the method will execute directly 

    )
}