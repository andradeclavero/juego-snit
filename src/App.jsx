import { useState, useEffect } from 'react';
import { gameData } from './data/gameData';
import CharacterSelection from './components/CharacterSelection';
import Board from './components/Board';

export default function App() {
    const [selectedChar, setSelectedChar] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(0); 
    const [showModal, setShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [confetti, setConfetti] = useState([]);

    const handleNodeClick = (index) => {
        if (index === currentLevel && index < 3) {
            setShowModal(true);
            setErrorMsg(null);
            setSuccessMsg(null);
        }
    };

    const handleOptionClick = (isCorrect, feedback) => {
        if (isCorrect) {
            setSuccessMsg(feedback);
            createConfetti(30);
        } else {
            setErrorMsg(feedback);
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
            setTimeout(() => {
                setShowModal(true);
                setErrorMsg(null);
            }, 6000);
        }
    };

    const handleContinue = () => {
        setSuccessMsg(null);
        setShowModal(false);
        setCurrentLevel(prev => prev + 1);
        if (currentLevel + 1 >= 3) {
            createConfetti(50);
        }
    };

    const resetGame = () => {
        setSelectedChar(null);
        setCurrentLevel(0);
        setShowModal(false);
        setErrorMsg(null);
        setSuccessMsg(null);
        setConfetti([]);
    };

    const createConfetti = (count = 30) => {
        const colors = ['#FF6B35', '#F7931E', '#00C896', '#4A90E2', '#764ba2'];
        const newConfetti = Array.from({ length: count }).map((_, i) => ({
            id: Date.now() + i,
            left: Math.random() * 100 + '%',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: Math.random() * 0.5 + 's'
        }));
        setConfetti(prev => [...prev, ...newConfetti]);
        
        setTimeout(() => {
            setConfetti([]);
        }, 3500);
    };

    return (
        <div className="game-container">
            {confetti.map(c => (
                <div 
                    key={c.id} 
                    className="confetti" 
                    style={{ left: c.left, background: c.background, animationDelay: c.animationDelay }} 
                />
            ))}

            {!selectedChar ? (
                <CharacterSelection onSelect={setSelectedChar} />
            ) : (
                <Board 
                    charKey={selectedChar}
                    charData={gameData[selectedChar]}
                    currentLevel={currentLevel}
                    hasWon={currentLevel >= 3}
                    onReset={resetGame}
                    showModal={showModal}
                    onNodeClick={handleNodeClick}
                    levelData={currentLevel < 3 ? gameData[selectedChar].levels[currentLevel] : null}
                    errorMsg={errorMsg}
                    successMsg={successMsg}
                    onOptionClick={handleOptionClick}
                    onContinue={handleContinue}
                    onErrorDismiss={() => setErrorMsg(null)}
                    onCloseModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
}
