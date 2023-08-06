import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PublicRoute() {
  // Desestructuramos el objeto "user" del contexto, que es lo único que nos interesa ahora:
  const { user } = useAuthContext();
  // Comprobamos si existe el usuario. SI SÍ EXISTE, accedemos (navegamos) a la vista allproducts (o sea, la vista "privada"):
  if (user) {
    return <Navigate to="/allproducts" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
