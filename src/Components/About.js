import React from 'react'
import UserCard from './UserCard'
import UserCardClass from './UserCardClass'

export class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount() {
    console.log("Parent Did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
      <h2>About Us</h2>
      <h3>This is a Food Restaurant App</h3>
      <UserCard name={"Siri "} location={"Hyderabad"} contact={"bobbilisirivennela@gmail.com"} />
      <UserCardClass name={"Siri Bobbili"} location={"Bangalure"} contact={"bobbilisirivennela@gmail.com"} />
      {/* <UserCardClass name={"Vennela Bobbili"} location={"Vizag"} contact={"bobbilisirivennela@gmail.com"} /> */}
      </div>
    )
  }
}
