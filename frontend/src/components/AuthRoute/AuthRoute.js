import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function AuthRoute({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    children //so here its simply checking if the user is logged in already, then show the children(i.e. components)
  ) : (
    //we're protecting, in this case the <checkoutPage /> <PaymentPage /> components otherwise redirect to login page (bearing the initialy requested
    //page in mind, (i.e. checkout page in this case), so that redirect the user to that particular page after he has logged in succcessfuly
    //instead of sending to the home page
    <Navigate to={`/login?returnUrl=${location.pathname}`} replace />
    //replace mean remove all the history of browser so user cant press go back page
  );
}
