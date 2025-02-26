import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate authentication
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
