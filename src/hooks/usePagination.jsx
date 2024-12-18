import { useState } from "react";

export const usePagination = (totalItems) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex +1)% totalItems);
    };

    const prev = () =>{
        setCurrentIndex((prevIndex)=> (prevIndex -1 + totalItems)% totalItems);
    };

    const setIndex = (index) => {
        if(index >=0 && index < totalItems){
            setCurrentIndex(index);
        }
    };

    return {currentIndex, next, prev, setIndex}

}