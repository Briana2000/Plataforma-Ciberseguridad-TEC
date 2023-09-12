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
                    category={challenge.category}
                    details={challenge.details}
                    flag={challenge.flag}
                />
            ))}
        </main>
    )
}
