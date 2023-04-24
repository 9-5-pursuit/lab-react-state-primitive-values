function Win ({setScore, setIncrement}){

    function Reset() {
        setScore(0);
        setIncrement(1);
    }

    return (
    <>    
    <h2>You Win!</h2>
    <button onClick={Reset}>Play Again?</button>
    </>
    )
}

export default Win;