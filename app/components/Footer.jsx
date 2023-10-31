import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#087EE1] to to-[#05E8BA]"><span>{`{`}</span>
        <span className="text-white">bijesh.dev</span>
        <span>{`}`}</span></div>
        
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
