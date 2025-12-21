import { useEffect, useState } from "react"

export function ApiUpdate() {
    const [mydata, setMyData] = useState([]);
    let url = "https://rickandmortyapi.com/api/character/2,4,20,24,40"

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyData(data))
        .catch(err=> console.log(`Error ${err}`));
    },[])

    return mydata;
}