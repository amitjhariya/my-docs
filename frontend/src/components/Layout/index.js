import React from "react";
import Nav from "../Header/Nav";

function Layout({children}) {
  return (
    <>
      <div className="isolate bg-white">
        <Nav/>
        {children}
      </div>
    </>
  );
}

export default Layout;
