const BestPlaces=(props)=>{
    let {resData}=props;
    let {text,link}=resData;
    return (
        <div className="bestPlaceCard">
            <button><a href={link}>{text}</a></button>

        </div>
    )
}

export default BestPlaces