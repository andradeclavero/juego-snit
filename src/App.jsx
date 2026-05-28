import { useState, useEffect, useRef } from 'react';
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
    const audioRef = useRef(null);

    useEffect(() => {
        let audioSrc = '';
        if (!selectedChar) {
            audioSrc = `${import.meta.env.BASE_URL}00_Seven_Blocks_Away.mp3`;
        } else if (selectedChar === 'bruno') {
            audioSrc = `${import.meta.env.BASE_URL}01_The_Correct_Answer.mp3`;
        } else if (selectedChar === 'olivia') {
            audioSrc = `${import.meta.env.BASE_URL}02_North_of_the_Save_Point.mp3`;
        }

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.loop = true;
            audio.volume = 0.4;
            audioRef.current = audio;
            
            audio.play().catch(e => console.log('Autoplay prevented:', e));
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [selectedChar]);

    // Intentar reproducir si el usuario interactúa (por políticas de autoplay)
    useEffect(() => {
        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().catch(() => {});
            }
        };
        document.addEventListener('click', handleInteraction);
        return () => document.removeEventListener('click', handleInteraction);
    }, []);

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
