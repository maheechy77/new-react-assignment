import React from "react";

import "./Cart.css";

const Cart = (props) => {
	const totalPrice = props.cart.reduce(
		(total, course) => total + course.price,
		0
	);
	return (
		<div>
			<div className="card cart">
				<div className="card-header">
					<h3>Cart</h3>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<h4>Course Enrolled:{props.courseTaken}</h4>
					</li>
					<li className="list-group-item">
						<h4>Total Amount :{totalPrice}</h4>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Cart;
