import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",

            },
        };

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="userCard">
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>Contact : mustafa@gmail.com</h4>

            </div>
        );
    }
}
export default UserClass;