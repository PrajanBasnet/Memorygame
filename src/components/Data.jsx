import { useEffect, useState } from "react"

export function ApiUpdate() {
    const [mydata, setMyData] = useState([]);
    const imageRandom = [];

    for (let i = 0; i < 5; i++) {
       imageRandom.push(Math.floor(Math.random() * 20))
        
    }

    console.log('randon', imageRandom)
    let url = "https://rickandmortyapi.com/api/character/2,4,20,24,40,50,1,3,5,22,24,27,30"

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyData(data))
        .catch(err=> console.log(`Error ${err}`));
    },[])

    return mydata;
}