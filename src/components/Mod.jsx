import { useApiUpdate } from "./Data"


export function Mode({ mode, setMode }) {

    return (
        <div>
            <div className="flex flex-wrap gap-3 justify-center  text-amber-100">
                <p className="bg-white/30 backdrop-blur-md w-30" onClick={() => {
                    setMode("Easy")
                }
                }
                >Easy Mode</p>
                <p className="bg-white/30 backdrop-blur-md w-30" onClick={() => {
                    setMode("Medium")
                }
                }
                >Medium Mode</p>
                <p className="bg-white/30 backdrop-blur-md w-30" onClick={() => {
                    setMode("Hard")
                }
                }
                >Hard Mode</p>
            </div>
        </div>
    )
}