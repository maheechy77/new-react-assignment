import React from "react";
import "./Course.css";

const Course = (props) => {
	const { name, img, price, createdBy } = props.course;
	return (
		<div className="col-md-4 course">
			<div className="card">
				<img src={img} className="card-img-top" alt={name} />
				<div className="card-body">
					<h5 className="card-title">Course Name: {name}</h5>
					<p className="card-text">Price: {price}</p>
					<p className="card-text">
						<small>Created By: {createdBy}</small>
					</p>
					<button
						onClick={() => props.handleEnrolment(props.course)}
						className="btn btn-primary"
					>
						{props.enrolled ? "Already Enrolled" : "Enroll Now"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Course;
