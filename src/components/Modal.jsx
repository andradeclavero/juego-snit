import { useEffect, useState } from 'react';

export default function Modal({ 
    levelData, 
    charData, 
    errorMsg, 
    successMsg, 
    onOptionClick, 
    onContinue, 
    onClose 
}) {
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Mezclar opciones cuando el nivel carga
        if (levelData) {
            setShuffledOptions([...levelData.options].sort(() => Math.random() - 0.5));
            setSelectedOption(null);
        }
    }, [levelData]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const isAnswered = successMsg || errorMsg;

    const renderVisual = (src) => {
        if (!src) return null;
        if (src.startsWith('/') || src.startsWith('http') || src.startsWith('./')) {
            const imgSrc = src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src.replace(/^\.?\//, '')}`;
            return <img src={imgSrc} alt="" className="visual-image" style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: '12px', display: 'block' }} />;
        }
        return src;
    };

    const renderIcon = (src) => {
        if (!src) return null;
        if (src.startsWith('/') || src.startsWith('http') || src.startsWith('./')) {
            const imgSrc = src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src.replace(/^\.?\//, '')}`;
            return <img src={imgSrc} alt="" className="icon-image" style={{ width: '2rem', height: '2rem', objectFit: 'contain' }} />;
        }
        return src;
    };

    return (
        <div className="modal-overlay active">
            <div className="challenge-modal">
                <div className="modal-header">
                    <span className="emoji">{renderIcon(charData.emoji)}</span>
                    <h2>{levelData.title}</h2>
                </div>

                <div className="modal-body">
                    <div className="visual-section">
                        <div className="illustration" style={levelData.illustration && (levelData.illustration.startsWith('/') || levelData.illustration.startsWith('http') || levelData.illustration.startsWith('./')) ? { padding: '10px', height: 'auto', width: 'fit-content', margin: '0 auto' } : {}}>
                            {renderVisual(levelData.illustration)}
                        </div>
                        <div className="map-preview">
                            {levelData.mapPreview || "📍 Santiago, Chile"}
                        </div>
                    </div>

                    <div className="context-section">
                        <div className="context-text">
                            {levelData.context}
                        </div>

                        <div className="options">
                            {shuffledOptions.map((opt, index) => (
                                <button 
                                    key={index}
                                    className={`option-btn ${isAnswered ? 'disabled' : ''}`}
                                    onClick={() => {
                                        if (!isAnswered) {
                                            setSelectedOption(opt);
                                            onOptionClick(opt.correct, opt.feedback);
                                        }
                                    }}
                                >
                                    <span className="option-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{renderIcon(opt.icon)}</span>
                                    <span>{opt.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {isAnswered && (
                    <div className={`feedback active ${successMsg ? 'success' : 'error'}`}>
                        <div className="feedback-title">
                            <span>{successMsg ? '✓' : '✗'}</span>
                            <span>{successMsg ? '¡Correcto!' : 'Inténtalo de nuevo'}</span>
                        </div>
                        {selectedOption && selectedOption.image && (
                            <div style={{ 
                                margin: '1rem auto', 
                                padding: '10px', 
                                border: '4px solid var(--dark)', 
                                borderRadius: '16px', 
                                backgroundColor: 'white', 
                                boxShadow: '0 6px 0 var(--dark)',
                                display: 'inline-block',
                                maxWidth: '100%',
                                textAlign: 'center'
                            }}>
                                <img src={selectedOption.image.startsWith('http') ? selectedOption.image : `${import.meta.env.BASE_URL}${selectedOption.image.replace(/^\.?\//, '')}`} alt="Opción seleccionada" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: '8px', display: 'block' }} />
                            </div>
                        )}
                        <p>{successMsg || errorMsg}</p>
                    </div>
                )}

                <div className="action-buttons">
                    <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    {successMsg && (
                        <button className="btn btn-primary" onClick={onContinue}>Continuar</button>
                    )}
                </div>
            </div>
        </div>
    );
}
