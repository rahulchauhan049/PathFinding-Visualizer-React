import React, { useEffect } from 'react'
import './SortingVisualizer.css'

function SortingVisualizer() {
    const [heightArray, setHeightArray] = React.useState([])
    const [arrayLength, setArrayLength] = React.useState(90)

    useEffect(() => {
        let arrayOfSizeN = Array(arrayLength).fill().map((v, i) => i+10);
        let shuffledArrayOfSizeN = arrayOfSizeN
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        setHeightArray(shuffledArrayOfSizeN)
    }, [arrayLength])

    const shuffleArray = () => {
        let arrayOfSizeN = Array(arrayLength).fill().map((v, i) => i+1);
        let shuffledArrayOfSizeN = arrayOfSizeN
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        setHeightArray(shuffledArrayOfSizeN)
    }

    return (
        <div className="app">
            <input type="range" min="10" max="100" value={arrayLength} onChange={(e) => setArrayLength(Number(e.target.value))} />
            <button onClick={() => shuffleArray()}>Random</button>
            <div className="array-container">
                {heightArray.map((height, index) => (
                    <div
                        className="array-bar"
                        key={index}
                        style={{
                            width: `${0.9}vw`,
                            backgroundColor: '#4286f4',
                            height: `${height}vh`,
                        }}></div>
                ))}
               
            </div>
        </div>
    )
}

export default SortingVisualizer
