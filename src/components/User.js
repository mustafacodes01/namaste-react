import { useState } from "react";
const User = ({ name }) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="userCard">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>{name}</h2>
            <h3>Location : Vikasnagar</h3>
            <h4>Contact : mustafa@gmail.com</h4>

        </div>
    );
}
export default User;