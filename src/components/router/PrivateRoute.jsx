import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateRoute() {
  // Desestructuramos el objeto "user" del contexto, que es lo único que nos interesa ahora:
  const { user } = useAuthContext();
  // Comprobamos si existe el usuario. SI NO EXISTE, accedemos (navegamos) a la vista "/" (o sea, la vista "pública"):
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
