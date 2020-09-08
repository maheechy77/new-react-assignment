import React, { useState, useEffect } from "react";

import datas from "../../data/course-data.json";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";

const Courses = (props) => {
	const [data, setData] = useState(datas);
	const [courseTaken, setCourseTaken] = useState(0);
	const [cart, setCart] = useState([]);
	const [enrolledCourse, setEnrolledCourse] = useState([]);

	useEffect(() => {
		setData(datas);
	}, []);

	const handleEnrolment = (courses) => {
		if (enrolledCourse.includes(courses.name)) {
			alert("Already enrolled. Try another course");
		} else {
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
