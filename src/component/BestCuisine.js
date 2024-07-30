<<<<<<< HEAD
const BestCuisines=(props)=>{
    let {resData}=props;
    let {text,link}=resData;

    return(
        <div className="cuisineContainer">
            <button><a href={link}>{text}</a></button>

        </div>
    )
}

=======
const BestCuisines=(props)=>{
    let {resData}=props;
    let {text,link}=resData;

    return(
        <div className="cuisineContainer">
            <button><a href={link}>{text}</a></button>

        </div>
    )
}

>>>>>>> 3ad1d0b4a8b7e3aa0094454340f2aaaccf3e7153
export default BestCuisines