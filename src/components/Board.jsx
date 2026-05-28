import Modal from './Modal';

export default function Board({ 
    charKey,
    charData, 
    currentLevel, 
    hasWon, 
    onReset,
    showModal,
    onNodeClick,
    levelData,
    errorMsg,
    successMsg,
    onOptionClick,
    onContinue,
    onCloseModal
}) {
    if (hasWon) {
        return (
            <div className="screen final-screen active">
                <div className="trophy">🏆</div>
                <h1>¡Felicitaciones!</h1>
                <p className="final-message">
                    Has completado todos los desafíos usando la <strong>inteligencia territorial</strong>. 
                    Los mapas y datos geoespaciales son superpoderes que nos ayudan a tomar mejores 
                    decisiones en la vida cotidiana.
                </p>
                <div>
                    <button className="btn btn-primary" onClick={onReset}>🎮 Jugar de Nuevo</button>
                </div>
            </div>
        );
    }

    const progress = (currentLevel / 3) * 80;

    const renderIcon = (src, size = '2rem') => {
        if (!src) return null;
        if (src.startsWith('/') || src.startsWith('http') || src.startsWith('./')) {
            const imgSrc = src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src.replace(/^\.?\//, '')}`;
            return <img src={imgSrc} alt="" style={{ width: size, height: size, objectFit: 'contain', display: 'inline-block' }} />;
        }
        return src;
    };

    return (
        <div className="screen board-screen active">
            <div className="board-header">
                <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
                    <button className="back-btn" onClick={onReset}>
                        ⬅️ Volver al inicio
                    </button>
                </div>
                <h2 className="board-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <span>{renderIcon(charData.emoji)}</span>
                    <span>{charData.name}</span>
                </h2>
                <div style={{ marginTop: '25px' }}>
                    <p className="board-message">
                        {currentLevel === 0 && `¡Preparados, listos, ya! Toca el círculo saltarín con el número 1 para empezar. 🚀`}
                        {currentLevel === 1 && `¡Genial! Lo hiciste muy bien. Ahora toca el número 2 para seguir la aventura. ⭐`}
                        {currentLevel === 2 && `¡Ya casi llegas a la meta! Toca el número 3 para el último desafío. 🏆`}
                    </p>
                </div>
            </div>

            <div className="progress-path">
                <div className="progress-line" style={{ width: `${progress}%` }}></div>
                
                {[1, 2, 3].map((level, index) => {
                    const isCompleted = index < currentLevel;
                    const isActive = index === currentLevel;
                    const isLocked = index > currentLevel;
                    
                    let className = 'level-node';
                    if (isCompleted) className += ' completed';
                    else if (isActive) className += ' active-node';
                    else if (isLocked) className += ' locked';

                    return (
                        <div 
                            key={level} 
                            className={className} 
                            onClick={() => !isLocked && onNodeClick(index)}
                        >
                            {isActive && <span className="node-emoji">{renderIcon(charData.emoji, '3rem')}</span>}
                            {isCompleted ? (
                                <span className="level-number">✓</span>
                            ) : (
                                <span className="level-number">{level}</span>
                            )}
                        </div>
                    );
                })}

                <div className={`level-node ${currentLevel >= 3 ? 'active-node' : 'locked'}`} onClick={() => currentLevel >= 3 && onNodeClick(3)}>
                    <span className="level-number">🏁</span>
                </div>
            </div>

            {showModal && (
                <Modal 
                    levelData={levelData}
                    charData={charData}
                    errorMsg={errorMsg}
                    successMsg={successMsg}
                    onOptionClick={onOptionClick}
                    onContinue={onContinue}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
}
