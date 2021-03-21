import React, {useState} from 'react';

function Menu({setNewScreen, setPlayers}) {

    const [firstPlayer, setFirstPlayer] = useState({
        name: "",
        isNameEntered: true
    });
    const [secondPlayer, setSecondPlayer] = useState({
        name: "",
        isNameEntered:  true
    });

    const [sameNames, setSameNames] = useState(false);

    const handleFirstPlayerInput = ({target}) => {
        setFirstPlayer({...firstPlayer, name: target.value});
    };

    const handleSecondPlayerInput = ({target}) => {
        setSecondPlayer({...secondPlayer, name: target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!firstPlayer.name.trim()) {
            setFirstPlayer({...firstPlayer, isNameEntered: false});
            return;
        } else if (!secondPlayer.name.trim()) {
            setFirstPlayer({...firstPlayer, isNameEntered: true});
            setSecondPlayer({...secondPlayer, isNameEntered: false});
            return;
        } else if( firstPlayer.name.toLowerCase() === secondPlayer.name.toLowerCase() ) {
            setFirstPlayer({...firstPlayer, isNameEntered: true});
            setSecondPlayer({...secondPlayer, isNameEntered: true});
            setSameNames(sameNames => true);
            return;
        } else {
            setSameNames(sameNames => false);
            setPlayers(firstPlayer.name, secondPlayer.name);
            setNewScreen("game");
        }
    };

    return (
        <div className="App">
        <div className = "menu__container">
            <h3 className = "menu__container-title">Connect 4</h3>
            <form className = "menu__container-form" onSubmit={handleSubmit}>
                <label 
                    for="firstPlayer">
                    Unesi ime prvog igrača
                </label>
                <input 
                    type="text" 
                    name="firstPlayer"  
                    placeholder="Player one..."
                    value={firstPlayer.name}
                    onChange = {handleFirstPlayerInput}>
                </input>
                <span className={`${firstPlayer.isNameEntered ? "" : "first-player--empty"}`}></span>
                <label 
                    for="secondPlayer">
                        Unesi ime drugog igrača
                </label>
                <input 
                    type="text" 
                    name="secondPlayer" 
                    placeholder="Player two..."
                    value={secondPlayer.name}
                    onChange = {handleSecondPlayerInput}>
                </input>
                <span className={`${secondPlayer.isNameEntered ? "" : "second-player--empty"} ${sameNames ? "same-names" : ""}`} ></span>
                <button 
                    type="submit" 
                    className ="submit-button">
                        Start
                </button>
            </form>
        </div>
        </div>
    )
};

export default Menu;