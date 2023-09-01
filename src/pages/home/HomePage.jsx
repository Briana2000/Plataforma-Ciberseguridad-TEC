import './home.css'
import { ChallengesContainer } from '../../cyberChallenges/components/ChallengesContainer'

export const HomePage = () => {
  const challenges = [
    {
      title: "Tentacle",
      platform: "HackTheBox",
      level: "Hard",
      machine: "Linux",
      flag: false
    },
    {
      title: "Validation",
      platform: "HackTheBox",
      level: "Easy",
      machine: "Linux",
      flag: false,
    }, 
    {
      title: "Mischief",
      platform: "HackTheBox",
      level: "Insane",
      machine: "Linux",
      flag: false,
    }]

  return (
    <>
        <div className="title-div">
            <h1 className="title-h1"> Cybersecurity Challenges </h1>
        </div>
        
        <ChallengesContainer list={challenges}/>
        
    </>
  )
}
