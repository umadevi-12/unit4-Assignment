import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>
        {isLoggedIn
          ? "You are logged in!"
          : "Please log in to continue."}
      </h2>
    </main>
  );
}

export default Main;
