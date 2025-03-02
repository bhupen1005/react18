import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  console.log(localStorage.getItem("auth"));

  // if auth key is true, navigate to dashboard

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/dashboard/profile");
    }
  }, []);

  const handleLogin = (e: any) => {
    localStorage.setItem("auth", "true");
    navigate("/dashboard/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Loin</button>
    </div>
  );
};

export default Login;
