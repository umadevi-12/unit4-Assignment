
import React from "react";

function UserProfile(props) {
  const user = props.user;

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com"
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
