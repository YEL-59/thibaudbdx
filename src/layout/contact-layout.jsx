import React from "react";
import { Outlet } from "react-router";

function ContactLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
