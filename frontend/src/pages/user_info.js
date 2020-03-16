import React from "react";
import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import UserProfile from "../components/userprofile";

function UserInfo() {
  return (
    <>
      <AdminHeader />
      <UserProfile />
      <Footer />
    </>
  );
}

export default UserInfo;