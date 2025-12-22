import { use, useState } from "react";
import { ApiUpdate } from "./Data";

export function Output() {
    const mydata = ApiUpdate()
    const [score, setScore] = useState([]);
    const [count, setCount] = useState(0);

    const [bestScore, setBestScore] = useState(() => {
        const save = localStorage.getItem("localScore");
        return save ? parseInt(save) : 1;
    })
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
        console.log(mydata)
    }
    return (
        <div className="text-amber-50">
            <div className="flex flex-wrap justify-end m-8">
                <div>

            <p className="font-extrabold text-4xl m-4">Memory Game</p>
                    <p><span className="font-extrabold">Current Score:</span> {count}</p>
                    <p> <span className="font-extrabold">Best Score: </span> {localStorage.getItem("localScore")}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">

                {mydata.map((value, index) => (
                    <div key={index} className="bg-white/30 backdrop-blur-md rounded-3xl w-80 text-center flex items-center justify-center ">
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