import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Login from "../components/auth/login";
function LoginPage() {
  return (
    <>
      <div style={{ backgroundColor: "#49b6ff" }}>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
