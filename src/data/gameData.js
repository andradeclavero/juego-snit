export const gameData = {
    bruno: {
        name: "Bruno",
        emoji: "🚲",
        avatar: "./bruno.png",
        desc: "El Ciclista - Movilidad activa y topografía urbana",
        color: "bg-blue-500",
        levels: [
            {
                title: "El cerro agotador",
                emoji: "🏔️",
                illustration: "./pend00.png",
                mapPreview: "📍 Cerro San Cristóbal, Santiago",
                context: "Bruno debe ir al sector oriente. Está cansado y la ruta recta parece tener subidas muy pronunciadas. ¿Qué debería hacer?",
                options: [
                    { text: "Ir en línea recta arriesgándose a caminar con la bici", icon: "🥵", image: "./pend01.png", correct: false, feedback: "Esa decisión podría agotarte o ponerte en riesgo. Los mapas topográficos muestran las elevaciones del terreno, ayudándote a elegir la mejor ruta según tus condiciones físicas." },
                    { text: "Seguir a ciclistas deportivos de alto rendimiento", icon: "🏃", image: "./pend02.png", correct: false, feedback: "Esa decisión podría agotarte rápidamente al intentar seguir su ritmo. Los mapas de elevación son mejores para adaptar la ruta a tus capacidades." },
                    { text: "Activar la capa de relieve (topografía) para buscar la ruta más plana", icon: "🗺️", image: "./pend03.png", correct: true, feedback: "¡Excelente! Los mapas de elevación te permiten visualizar el terreno antes de salir. Así puedes elegir rutas más amigables según tu nivel de energía." }
                ]
            },
            {
                title: "La ruta segura",
                emoji: "🚦",
                illustration: "./ciclo00.png",
                mapPreview: "📍 Providencia, Santiago",
                context: "Bruno debe cruzar la ciudad en hora punta con tráfico denso y autos rápidos. Le preocupa su seguridad en la vía principal.",
                options: [
                    { text: "Ir por la vereda esquivando peatones", icon: "🚶", image: "./ciclo01.png", correct: false, feedback: "Es peligroso y está prohibido circular por la vereda. Los visores oficiales te muestran la infraestructura ciclista para planificar vías seguras." },
                    { text: "Pegarse a un bus grande para protegerse", icon: "🚌", image: "./ciclo02.png", correct: false, feedback: "Esta acción tiene un alto riesgo de accidente por los puntos ciegos. Es mejor usar sistemas de información geográfica para encontrar ciclovías." },
                    { text: "Consultar el visor oficial para conectar calles con ciclovías exclusivas", icon: "📱", image: "./ciclo03.png", correct: true, feedback: "¡Perfecto! Las capas de infraestructura ciclista en los visores oficiales muestran ciclovías, ciclobandas y calles tranquilas. Planificar tu ruta te mantiene seguro." }
                ]
            },
            {
                title: "El bache oculto",
                emoji: "⚠️",
                illustration: "./evento00.png",
                mapPreview: "📍 Ñuñoa, Santiago",
                context: "Bruno casi se accidenta por un hoyo profundo y peligroso que no estaba señalizado en su ruta habitual. ¿Qué debería hacer?",
                options: [
                    { text: "Dejar una rama grande en el hoyo para señalizarlo", icon: "🌿", image: "./evento01.png", correct: false, feedback: "Es una solución temporal y puede ser peligrosa. Es mejor usar plataformas de mapeo colaborativo para alertar oficialmente." },
                    { text: "Esperar a que la municipalidad lo descubra por sí sola", icon: "⏳", image: "./evento02.png", correct: false, feedback: "Puede tomar mucho tiempo y causar accidentes mientras tanto. Reportarlo en mapas colaborativos agiliza la reparación." },
                    { text: "Usar una app de mapas colaborativos para marcar la ubicación del peligro", icon: "📍", image: "./evento03.png", correct: true, feedback: "¡Genial! Los Sistemas de Información Geográfica participativos permiten reportar problemas geolocalizados. Tus alertas ayudan a otros y aceleran reparaciones." }
                ]
            }
        ]
    },
    olivia: {
        name: "Olivia",
        emoji: "🛵",
        avatar: "./olivia.png",
        desc: "La Exploradora Urbana - Cultura, servicios y datos de la ciudad",
        color: "bg-emerald-500",
        levels: [
            {
                title: "El tesoro escondido",
                emoji: "🗺️",
                illustration: "./edif00.png",
                mapPreview: "📍 Providencia, Santiago",
                context: "Olivia está jugando al geocaching. La pista dice: 'Busca cerca de la estructura más alta visible desde el norte en la comuna de Maipú'.",
                options: [
                    { text: "Activar la capa de 'Edificaciones' y filtrar por altura en el visor territorial de Maipú.", icon: "🏢", image: "./edif03.png", correct: true, feedback: "¡Excelente! Los datos de catastro con atributos (como la altura) te permiten filtrar e identificar rápidamente infraestructuras específicas." },
                    { text: "Conducir por todo Maipú mirando hacia arriba para encontrar el edificio.", icon: "🛵", image: "./edif01.png", correct: false, feedback: "Podrías gastar horas o días, y la perspectiva desde la calle engaña. Los datos catastrales resuelven esto en segundos." },
                    { text: "Preguntar a los transeúntes cuál es el edificio más alto.", icon: "🗣️", image: "./edif02.png", correct: false, feedback: "Las respuestas de las personas pueden ser subjetivas. Los datos geoespaciales de edificación ofrecen información objetiva y precisa." }
                ]
            },
            {
                title: "El mural perdido",
                emoji: "🎨",
                illustration: "./mural00.png",
                mapPreview: "📍 Recoleta, Santiago",
                context: "Olivia busca un famoso mural de arte urbano para su colección fotográfica, pero la dirección es imprecisa y no logra encontrarlo por las calles de Independencia.",
                options: [
                    { text: "Buscar en Google Images sin rumbo fijo hasta que aparezca.", icon: "🔍", image: "./mural01.png", correct: false, feedback: "Las imágenes sueltas en internet no siempre tienen la geolocalización correcta o actualizada. Necesitas datos territoriales validados." },
                    { text: "Volver a casa y rendirse.", icon: "🏠", image: "./mural02.png", correct: false, feedback: "¡No te rindas! Con las herramientas de información geográfica adecuadas, el arte urbano es fácil de descubrir." },
                    { text: "Consultar la capa oficial de 'Puntos de Interés Cultural y Murales' del municipio.", icon: "📍", image: "./mural03.png", correct: true, feedback: "¡Perfecto! El uso de mapas temáticos locales de cultura te entrega coordenadas exactas y validadas, ahorrándote frustraciones." }
                ]
            },
            {
                title: "La feria de los sábados",
                emoji: "🍎",
                illustration: "./feria00.png",
                mapPreview: "📍 Ñuñoa, Santiago",
                context: "Es sábado por la mañana. Olivia quiere comprar frutas frescas en la feria libre más cercana, pero no sabe cuál está instalada hoy ni cómo llegar esquivando el tráfico local.",
                options: [
                    { text: "Llamar a una amiga para ver si sabe cuál está abierta hoy.", icon: "📞", image: "./feria01.png", correct: false, feedback: "Tu amiga podría equivocarse o no conocer los cortes de calle. Los datos de servicios públicos son más confiables." },
                    { text: "Revisar la capa de 'Ferias Libres y Mercados' y usar la herramienta de ruteo dinámico.", icon: "🗺️", image: "./feria03.png", correct: true, feedback: "¡Brillante! Combinar datos de servicios públicos dinámicos con ruteo te permite llegar eficientemente, evitando calles cerradas." },
                    { text: "Esperar en la esquina a ver si pasa un camión de feria.", icon: "🚛", image: "./feria02.png", correct: false, feedback: "Esa estrategia depende completamente del azar. Los visores territoriales te dan la certeza de dónde y cuándo ocurren las actividades urbanas." }
                ]
            }
        ]
    }
};