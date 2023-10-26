import User from "./User";
import './userContainer.css';

const UsersContainer = (props) => {

    const listOfUsers = props.list;
    
    return (
        <main className="chall-container">
            <div className="div-users-titles-columns">
                <h5> Carnet </h5>
                <h5> Nickname </h5>
                <h5> User Role </h5>
                <h5> Edit </h5>
            </div>
            {listOfUsers.map((user, index) => (
                <User
                    key={index}
                    ID={user.ID}
                    Nickname={user.Nickname}
                    Carnet={user.Carnet}
                    Player={user.Player}
                />
            ))}
        </main>
    );
}

export default UsersContainer;
