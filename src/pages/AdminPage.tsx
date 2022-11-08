import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminProductList from "../components/EditProductList/EditProductList";
import { State } from "../interface/interfaces";
import classes from "./AdminPage.module.css";

function AdminPage() {
  const user = useSelector((state: State) => state.userInfo);
  const adminUID = "PVqBPq4zyohwxdU6Zj5eaxbuwSI3";
  const isAdmin = user?.uid === adminUID;

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={classes.container}>
      <AdminProductList />
    </div>
  );
}

export default AdminPage;
