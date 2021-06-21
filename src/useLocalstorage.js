
import {useEffect, useState} from 'react';
const getLoaleStorage=(key)=>{

const savedValue=JSON.parse(localStorage.getItem(key));

if(savedValue) return savedValue

}

function useLocalstorage(key){

    const [value,setName]=useState(()=>{
        return getLoaleStorage(key); 
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])



    return [value,setName];
}

export default useLocalstorage

