import { use, useState } from "react";
import { ApiUpdate } from "./Data";

export function Output() {
    const mydata = ApiUpdate()
    const [score, setScore] = useState([]);
    const [count, setCount] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        const save = localStorage.getItem("localScore");
        return save ? parseInt(save) : 0;
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

        if (count > bestScore) {
            localStorage.setItem("localScore", count);
        }

        mydata.sort(() => Math.random() - 0.5);
        console.log(mydata)
    }
    return (
        <div className="text-amber-50">
            <div className="flex flex-wrap gap-1">

                {mydata.map((value, index) => (
                    <div key={index} >
                        <div onClick={(e) => myScore(value.id)}>
                            <img src={value.image} alt="image" />
                            <p className="bg-red-300">{value.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p>{count}</p>
            <p>All time best: {localStorage.getItem("localScore")}</p>
        </div>
    )
}