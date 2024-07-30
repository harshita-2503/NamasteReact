<<<<<<< HEAD
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went Wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
=======
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went Wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
>>>>>>> 3ad1d0b4a8b7e3aa0094454340f2aaaccf3e7153
export default Error