import useAuthContext from "../../context/AuthContext";

const Dashboard = () => {
   const { employee } = useAuthContext();

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