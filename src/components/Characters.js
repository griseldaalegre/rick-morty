
export default function Characters(props) {

    const resertCharacters = () => {
        setCharacters(null);
    }
    //array destructory
    const { characters, setCharacters } = props;
    return <div className="characters">
        <h1>Personajes </h1>
        <span className="back-home" onClick={resertCharacters}>Volver al home</span>
        <div className="container-characters">

            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <img src={character.image} alt={character.name} />
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    Dead
                                </>
                            )}
                        </h6>
                        <p className="text-grey"><span>Episodios: </span>
                            <span>{character.episode.length}</span></p>
                        <p className="text-grey"><span>Especie: </span>
                            <span>{character.species}</span></p>

                    </div>
                </div>

            ))}
        </div>
        <span className="back-home"  onClick={resertCharacters}>Volver al home</span>
    </div>

}