import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }
    render() {

        return (

            <div><h1>About</h1>
                <h2>This is About Page!</h2>


                <UserClass name={"First "} Location={"Dehradun(class)"} />

            </div>
        );
    }
}
export default About;