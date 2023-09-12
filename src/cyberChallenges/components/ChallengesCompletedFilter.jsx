import React, { useState } from 'react';
import '../../cyberChallenges/styles/challengesCompletedFilter.css'

export const ChallengesCompletedFilter = ({ challenges }) => {

    const [completed, setCompleted] = useState(false);

    const handleToggleCompleted = () => {
        setCompleted(!completed);
      };

    return(
        <>
        <div className='div-filter-challenges'>
            <label>
                Filter Completed Challenges:
                <input className='checkbox-filter-challenges' 
                type="checkbox"
                onClick={handleToggleCompleted}
                checked={completed}
                />
            </label>
            {/* Falta método API para filtrar los ejercicios como completados */}     
        </div>
        </>
    )
}