import { gameData } from '../data/gameData';

export default function CharacterSelection({ onSelect }) {
    const renderIcon = (src) => {
        if (!src) return null;
        if (src.startsWith('/') || src.startsWith('http')) {
            return <img src={src} alt="" style={{ width: '6rem', height: '6rem', objectFit: 'contain', margin: '0 auto' }} />;
        }
        return src;
    };

    return (
        <div className="screen start-screen active">
            <img 
                src="/Color_MinBienes.png" 
                alt="Logo Ministerio de Bienes Nacionales" 
                style={{ height: '80px', margin: '0 auto 1rem', display: 'block' }} 
            />
            <h1>🗺️ Superpoderes Territoriales</h1>
            <p className="subtitle">Usa el poder de los mapas para resolver problemas cotidianos</p>
            
            <div className="character-selection">
                {Object.entries(gameData).map(([key, char]) => (
                    <div 
                        key={key} 
                        className="character-card" 
                        onClick={() => onSelect(key)}
                    >
                        <span className="character-emoji">{renderIcon(char.avatar || char.emoji)}</span>
                        <h3 className="character-name">{char.name}</h3>
                        <p className="character-desc">{char.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
