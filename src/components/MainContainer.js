import React, { useState } from "react";

const options = ['😈', '😮', '😁', '🥺', '🤪', '💅'];

function MainContainer() {
    const [voteCount, setVoteCount] = useState(Array(options.length).fill(0));

    const voteForOption = (index) => {
        const newVoteCount = [...voteCount];
        newVoteCount[index]++;
        setVoteCount(newVoteCount);
    };

    const getWinningIndex = () => {
        let maxVotes = -1;
        let winningIndex = -1;
        for (let i = 0; i < voteCount.length; i++) {
            if (voteCount[i] > maxVotes) {
                maxVotes = voteCount[i];
                winningIndex = i;
            }
        }
        return winningIndex;
    };

    const showWinner = () => {
        const winnerIndex = getWinningIndex();
        const winnerEmoji = options[winnerIndex];
        alert(`Winner emoji: ${winnerEmoji}`);
    };

    return (
        <div>
            <div id='voting-container'>
                {options.map((option, index) => (
                    <div className="smiley-container" key={index}>
                        <div className="smiley" onClick={() => voteForOption(index)}>
                            {option}
                        </div>
                        <div className="vote-count">
                            {voteCount[index]}
                        </div>
                    </div>
                ))}
            </div>
            <button id='show-results' onClick={showWinner}>Show result</button>
        </div>
    );
}

export default MainContainer;
