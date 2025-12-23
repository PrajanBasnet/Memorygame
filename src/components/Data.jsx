import { useEffect, useState } from "react"

export function useApiUpdate(mode) {

    const [mydata, setMyData] = useState([]);
    useEffect(()=>{
    let maxCard= [];
    if(mode === "Easy") maxCard = [2,4,5,6]
    if(mode === "Medium") maxCard = [8,33,22,1,2,3,4,5]
    if(mode === "Hard") maxCard = [2,3,4,5,22,23,24,29,30,33,35,20]
    
    
        let url = `https://rickandmortyapi.com/api/character/${maxCard.join(',')}`
        if(!mode) return;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyData(data))
        .catch(err=> console.log(`Error ${err}`));
    },[mode])

    return mydata;
}