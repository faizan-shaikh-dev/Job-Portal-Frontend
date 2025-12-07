import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const AdminProtected = ({ children }) => {
  const { loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-sm text-slate-500">Cheking Permision...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminProtected;
