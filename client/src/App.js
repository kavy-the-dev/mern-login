import { Route, Routes, Navigate } from "react-router-dom";
import home from "./home/home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

function App() {
	const user = localStorage.getItem("access_token");

	return (
		<Routes>
	
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/home" exact element={<home />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
		</Routes>
	);
}

export default App;