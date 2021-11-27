import React, { Component } from "react";
import "./StylingSheet.css";

// import Comments from "./Comments";
// import CommentsSection from "./CommentsSection";

export class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
    };
  }
  likeHandle = (e) => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };
  render() {
    return (
      <div
        className="containerBlog"
        style={{ backgroundImage: `url(${this.props.src})` }}
      >
        <div className="myBlog">
          <div className="blog-bottomContainer">
            <div className="blog-title"> {this.props.title}</div>
            <div className="blog-date">
              <div>{this.props.date.toLocaleDateString("en-US")} </div>
              <div className="like-button-container">
                <span onClick={this.likeHandle}>
                  {" "}
                  <i class="far fa-heart"></i>
                </span>{" "}
                {this.state.likeCount}
              </div>
            </div>
          </div>
          {/* <br />
          
          <span>Like: </span> */}

          {/* <div>
            <CommentsSection />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Blogs;
