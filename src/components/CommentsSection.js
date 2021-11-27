import React, { Component } from "react";

class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsArr: localStorage.getItem("commentsDataArr")
        ? JSON.parse(localStorage.getItem("commentsDataArr"))
        : [],
    };
  }
  addCommentsFunc = (e) => {
    let commentValue = document.getElementById("commentText").value;
    document.getElementById("commentText").value = "";
    let allComments = this.state.commentsArr;
    allComments.push(commentValue);
    localStorage.setItem("commentsDataArr", JSON.stringify(allComments));
    this.setState({
      commentsArr: allComments,
    });
  };

  render() {
    return (
      <div>
        <div id="comments-container">
          {localStorage.getItem("commentsDataArr") &&
            this.state.commentsArr.map((data, index) => {
              return (
                <article key={"comments" + index} style={{ color: "black" }}>
                  {data}
                </article>
              );
            })}
        </div>
        <div className="text-box-container">
          <input id="commentText" type="textarea" name="commentsArr" />
        </div>
        <div className="text-box-container">
          {" "}
          <button onClick={this.addCommentsFunc}>Comments Here </button>
        </div>
      </div>
    );
  }
}
export default CommentsSection;
