<<<<<<< HEAD
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








=======
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








>>>>>>> 3ad1d0b4a8b7e3aa0094454340f2aaaccf3e7153
export default Carousal;