import './styles/challengesContainer.css';
import { Challenge } from './Challenge';

// Aquí el main debe contener todos los retos
export const ChallengesContainer = (props) => {
    const listOfChallenges = props.list;
    return (
        <main className="chall-container">
            {listOfChallenges.map((challenge, index) => (
                <Challenge
                    key={index}
                    ID={challenge.ID}
                    Name={challenge.Name}
                    Platform={challenge.Platform}
                    Level={challenge.Level}
                    Category={challenge.Category}
                />
            ))}
        </main>
    )
}
