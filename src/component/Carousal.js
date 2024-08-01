import { useState,useEffect } from "react";
import { CDN_URL } from "../utils/constants";

const Carousal=(props)=>{
    const {corData} = props;

    const {imageId,description} =corData;

    return (
        <div className="carousal-card">
            <img src={CDN_URL+imageId}/>


        </div>
    )




}








export default Carousal;