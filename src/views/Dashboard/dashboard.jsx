import useAuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   const { employee, isLoggedIn } = useAuthContext();
   const navigate = useNavigate();

  //  if (!isLoggedIn) {
  //     navigate('/');
  //  }

  return (
    <>
      Welcome, {employee?.first_name}!
    </>
  )
}

export default Dashboard