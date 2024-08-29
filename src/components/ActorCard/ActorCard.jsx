
import css from "./ActorCard.module.css";

const ActorCard = ({ actor }) => {
    const { profile_path, name, character } = actor;
    return (
        <div className={css.actorCard}>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
            <p>
                {name} <br />
                {character && (
                    <>
                        as <span>{character}</span>
                    </>
                )}
            </p>
        </div>
    );
};
export default ActorCard;
