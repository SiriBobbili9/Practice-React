import React from "react";

class UserCardClass extends React.Component {
    constructor(props) {
       super(props);
       console.log("Child Constructor");
       
       this.state = {
        userInfo: {
            name:"dummy",
            location:"dummy"
        }
       }
    }
    async componentDidMount() {
        console.log("Child Did mount");
        const data = await fetch("https://api.github.com/users/siriBobbili9");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("Did Update");
        
    }
  render() {
    console.log("Child render");
    const {name, location, contact} = this.props;
    const {userInfo} = this.state;
    return (
      <div className="user-card">
        {/*<h3>Name: {this.props.name}</h3>*/}
       <h3>Name: {userInfo.login}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: {contact}</h5>
      </div>
    );
  }
}
export default UserCardClass