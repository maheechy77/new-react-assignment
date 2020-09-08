import React, { useState, useEffect } from "react";

import datas from "../../data/course-data.json";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";

const Courses = (props) => {
	const [data, setData] = useState(datas);
	const [courseTaken, setCourseTaken] = useState(0);
	const [cart, setCart] = useState([]);
	const [enrolledCourse, setEnrolledCourse] = useState([]);
	const [classSuccess, setClassSucess] = useState("alert alert-success d-none");
	const [classWarning, setClassWarning] = useState(
		"alert alert-warning d-none"
	);

	useEffect(() => {
		setData(datas);
	}, []);

	const handleEnrolment = (courses) => {
		if (enrolledCourse.includes(courses.name)) {
			setClassWarning("alert alert-warning");
			setTimeout(() => {
				setClassWarning("alert alert-warning  d-none");
			}, 3000);
		} else {
			setClassSucess("alert alert-success");
			setTimeout(() => {
				setClassSucess("alert alert-success  d-none");
			}, 3000);
			setCourseTaken(courseTaken + 1);

			const newEnrollment = [...enrolledCourse, courses.name];
			setEnrolledCourse(newEnrollment);

			const newCourses = [...cart, courses];
			setCart(newCourses);
		}
	};
	return (
		<React.Fragment>
			<div className="row">
				<div className="col-md-8 courses">
					<h2>Courses</h2>
					<div className={classSuccess} role="alert">
						Thank you for taking the course
					</div>
					<div className={classWarning} role="alert">
						Already Enrolled. Please try another Course
					</div>
					<div className="row">
						{data.map((course) => (
							<Course
								key={course.name}
								handleEnrolment={handleEnrolment}
								course={course}
								enrolled={enrolledCourse.includes(course.name)}
							/>
						))}
					</div>
				</div>
				<div className="col-md-3">
					<Cart cart={cart} courseTaken={courseTaken} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Courses;
