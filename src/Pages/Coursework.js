import React from "react";
import "./Coursework.css";

const coursework = [
  {
    semester: "Fall 2022",
    courses: [
      { courseCode: "COP4530", courseName: "Introduction to Computer Science", grade: "" },
      { courseCode: "MATH150", courseName: "Calculus I", grade: "" },
    ],
  },
  {
    semester: "Spring 2023",
    courses: [
      { courseCode: "CS102", courseName: "Data Structures", grade: "" },
      { courseCode: "PHYS121", courseName: "Physics I", grade: "" },
    ],
  },
  {
    semester: "Fall 2023",
    courses: [
      { courseCode: "CS201", courseName: "Algorithms", grade: "" },
      { courseCode: "STAT101", courseName: "Introduction to Statistics", grade: "" },
    ],
  },
  {
    semester: "Spring 2026",
    courses: [
      { courseCode: "CS499", courseName: "Capstone Project", grade: "" },
    ],
  },
];

const Coursework = () => {
  return (
    <div className="coursework-container">
      <h1 className="coursework-title">Coursework</h1>
      <div className="coursework-grid">
        {coursework.map((semester, index) => (
          <div key={index} className="semester-card">
            <h2 className="semester-name">{semester.semester}</h2>
            <ul className="course-list">
              {semester.courses.map((course, i) => (
                <li key={i} className="course-item">
                  <span className="course-code">{course.courseCode}</span>:{" "}
                  {course.courseName} —{" "}
                  <span className="course-grade">
                    {course.grade || "Grade: TBD"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
