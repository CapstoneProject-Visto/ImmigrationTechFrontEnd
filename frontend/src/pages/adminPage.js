import React from "react";
import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import AdminLogin from "../components/admindashboard";

function adminPage() {
  return (
    <>
      <AdminHeader />
      <AdminLogin />
      <Footer />
    </>
  );
}

export default adminPage;
