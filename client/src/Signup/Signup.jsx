import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './styles.css'

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={"signup_container"}>
			<div className={"signup_form_container"}>
				<div className={"left"}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={"white_btn"}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={"right"}>
					<form className={"form_container"} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="voter_id"
							name="voter_id"
							onChange={handleChange}
							value={data.voter_id}
							required
							className={"input"}
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={"input"}
						/>
						
						<input
							type="password_confirmation"
							placeholder="password_confirmation"
							name="password_confirmation"
							onChange={handleChange}
							value={data.password_confirmation}
							required
							className={"input"}
						/>
						{error && <div className={"error_msg"}>{error}</div>}
						<button type="submit" className={"green_btn"}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;

