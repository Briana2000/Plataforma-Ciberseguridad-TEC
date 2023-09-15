import '../../cyberChallenges/styles/challengesContainer.css'
import { Challenge } from './Challenge';

// Aquí el main debe contener todos los retos
export const ChallengesContainer = (props) => {
    const listOfChallenges = props.list;
    return (
        <main className="chall-container">
            {listOfChallenges.map((challenge) => (
                <Challenge
                    ID={challenge.ID}
                    Name={challenge.Name}
                    Platform={challenge.Platform}
                    Level={challenge.Level}
                    Category={challenge.Category}
                    Description={challenge.Description}
                />
            ))}
        </main>
    )
}
