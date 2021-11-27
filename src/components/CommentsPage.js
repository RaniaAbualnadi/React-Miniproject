import React, { Component } from "react";
import CommentsSection from "./CommentsSection";
// import Blogs from "./Blogs";
// import { Link } from "react-router-dom";

export default class CommentsPage extends Component {
  render() {
    return (
      <div>
        <div className="commentsPage">
          <CommentsSection />
        </div>
      </div>
    );
  }
}
