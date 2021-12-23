import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: '',
      date: '',
      price: '',
      link: '',
      contact: '',
      description: '',
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Create;