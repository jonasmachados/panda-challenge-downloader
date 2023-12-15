import React, { useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return <AppNavigator user={user} updateUser={updateUser} />;
}
