import { useNavigate, Outlet } from "react-router";
import { Header } from "../components/header";

export const DefaultLayout = () => {
  const navigate = useNavigate();
  const handleRoute = async (path: string) => {
    console.log("navigate to:", path);
    navigate(path);
  };

  return (
    <>
      <Header
        is_authenticated={true}
        is_admin={true}
        handleRoute={handleRoute}
      />
      <Outlet />
    </>
  );
};
