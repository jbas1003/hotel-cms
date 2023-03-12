import useAuthContext from "../../context/AuthContext";

const Dashboard = () => {
   const { employee } = useAuthContext();
  return (
    <>
      Welcome, {employee?.firstName}!
    </>
  )
}

export default Dashboard