import React, { Component } from "react";
import "./style/postfield.scss";
import axios from "axios";

class PostField extends Component {
  constructor(props) {
    super(props);
    this.state = { user_id: "", message: "" };
  }

  onChangeMessage = e => {
    this.setState({
      message: e.target.value,
      user_id: "4"
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user_id, message } = this.state;

    const postObject = {
      user_id,
      message
    };

    axios
      .post("http://localhost:3000/api/posts", postObject)
      .then(() => console.log("post created"))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="postFieldContainer">
        <div className="postField">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="message"
              placeholder="Exprimez-vous !"
              onChange={this.onChangeMessage}
            />
            <button type="submit">post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostField;