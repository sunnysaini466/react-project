import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("best place to fetch API");
  }
  componentDidUpdate() {
    console.log("after re render it will call component did update");
  }
  
  componentWillUnmount() {
    console.log("it will call after component will vanish");
  }
  render() {
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h3>Name: {this.props.name}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Profile;
