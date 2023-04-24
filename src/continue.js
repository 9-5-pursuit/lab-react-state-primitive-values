// import react from './react';


function ContinuePlaying({score, increment, updateScore, increaseIncrementer}) {
    return (
        <>
        <h1>Current Score: {score}</h1>
        <button onClick={updateScore}>+{increment}</button>
        < br />
        < br/>
        <button onClick={increaseIncrementer}>Pay 10 points to change from +{increment} to +{increment + 1}</button>
        </>
    )
}

export default ContinuePlaying;