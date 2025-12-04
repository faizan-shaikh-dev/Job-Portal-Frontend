import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div>
                Loading....
            </div>
        </div>
        </>
    )
  }
  return user ? children : <Navigate to="/login" replace />;
};

export default Protected;
