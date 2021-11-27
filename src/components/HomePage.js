import React, { Component } from "react";
import Blogs from "./Blogs";

class HomePage extends Component {
  render() {
    const blogs = [
      {
        id: "e1",
        title: "Cappadocia-Turkey ",

        date: new Date(),
        src: "./images/img1.jpg",
      },
      {
        id: "e2",
        title: "Pertonas - Malaysia",

        date: new Date(2021, 2, 12),
        src: "./images/img2.jpg",
      },
      {
        id: "e3",
        title: "Dubai- UAE",
        amount: 294.67,
        date: new Date(2021, 2, 28),
        src: "./images/img3.jpg",
      },
      {
        id: "e4",
        title: "Beirut - Lebanon",
        amount: 450,
        date: new Date(2021, 5, 12),
        src: "./images/img4.jpg",
      },
      {
        id: "e5",
        title: "Phuket-Thailand",

        date: new Date(),
        src: "./images/img5.jpg",
      },
      {
        id: "e6",
        title: "Phuket-Thailand",

        date: new Date(2021, 2, 12),
        src: "./images/img6.jpg",
      },
      {
        id: "e7",
        title: "Duden-Antalya",
        date: new Date(2021, 2, 28),
        src: "./images/img7.jpg",
      },
      {
        id: "e8",
        title: "Hadrian’s Gate-Antalya",
        date: new Date(2021, 7, 12),
        src: "./images/img8.jpg",
      },
    ];
    return (
      <div className="main-blog-container">
        {blogs.map((blog) => {
          return (
            <Blogs
              src={blog.src}
              title={blog.title}
              amount={blog.amount}
              date={blog.date}
            />
          );
        })}
      </div>
    );
  }
}
export default HomePage;
