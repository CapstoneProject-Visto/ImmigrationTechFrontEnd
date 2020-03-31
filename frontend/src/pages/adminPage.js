import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AdminLogin from "../components/admindashboard";

function adminPage() {
  return (
    <>
      <Header />
      <AdminLogin />
      <Footer />
    </>
  );
}

export default adminPage;
