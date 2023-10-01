import { useLocation } from "react-router-dom";
export default function Confirmation() {
  let { state } = useLocation();
  console.log({ state });
  return (
    <div className="container">
      <h1>Thank You!</h1>
      {state && (
        <p>You're now registered for Red30 Tech. your email is <strong>{state.email}</strong></p>
      )}
    </div>
  );
}
