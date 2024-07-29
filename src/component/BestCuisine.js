const BestCuisines=(props)=>{
    let {resData}=props;
    let {text,link}=resData;

    return(
        <div className="cuisineContainer">
            <button><a href={link}>{text}</a></button>

        </div>
    )
}

export default BestCuisines