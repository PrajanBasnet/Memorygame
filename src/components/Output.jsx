    import { use, useEffect, useState } from "react";
    import { useApiUpdate } from "./Data";

    export function Output({mode}) {

        const [score, setScore] = useState([]);
        const [count, setCount] = useState(0);
        
        const [bestScore, setBestScore] = useState(() => {
            const save = localStorage.getItem("localScore");
            return save ? parseInt(save) : 1;
        })
        const mydata = useApiUpdate(mode)
        useEffect(()=>{
            setScore([])
            setCount(0)

        },[mode])
        
        if(!mode){
            return (
                <div className="text-yellow-500">
                    <p>Please select a mode</p>
                </div>
            )
        }
        
        function myScore(ind) {
            if (score.includes(ind)) {
                alert("You loss the game")
                setScore([])
                setCount(0)
                return;
            }
            setCount(count + 1)
            setScore([...score, ind])

            const newCount = count + 1;
            setCount(newCount);

            if (newCount > bestScore) {
                setBestScore(newCount);
                localStorage.setItem("localScore", newCount);
            }
                mydata.sort(() => Math.random() - 0.5);
        }
        return (
            <div className="text-amber-50">
                <div className="flex flex-wrap justify-center m-2">
                    <div>

                <p className="font-extrabold text-4xl m-2">Memory Game</p>
                        <p><span className="font-extrabold">Current Score:</span> {count}</p>
                        <p> <span className="font-extrabold">Best Score: </span> {localStorage.getItem("localScore")}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">

                    {mydata.map((value, index) => (
                        <div key={index} className="bg-white/30 backdrop-blur-md rounded-3xl w-70 text-center flex items-center justify-center ">
                            <div onClick={(e) => myScore(value.id)} >
                                <img src={value.image} alt="image" className="h-50  w-50 rounded-full" />
                                <p className="font-extrabold text-amber-200">{value.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }