import '../../cyberChallenges/styles/challengesContainer.css'
import { Challenge } from './Challenge';

// Aquí el main debe contener todos los retos
export const ChallengesContainer = (props) => {
    const listOfChallenges = props.list;
    return (
        <main className="chall-container">
            {listOfChallenges.map((challenge, index) => (
                <Challenge
                    key={index}
                    title={challenge.title}
                    platform={challenge.platform}
                    level={challenge.level}
                    machine={challenge.machine}
                    flag={challenge.flag}
                />
            ))}
        </main>
    )
}
