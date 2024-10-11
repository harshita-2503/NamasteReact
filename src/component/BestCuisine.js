const BestCuisines=(props)=>{
    let {resData}=props;
    let {text,link}=resData;

    return(
        <div className="flex">
            <button className="p-4 m-4 bg-black text-white w-80 rounded-lg"><a href={link}>{text}</a></button>

        </div>
    )
}

export default BestCuisines