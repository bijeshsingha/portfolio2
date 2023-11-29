'use client'
import React,{useEffect} from "react";

const Footer = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // Check if the user is scrolling down
      if (event.deltaY > 0) {
        // Prevent the default behavior (scrolling down)
        event.preventDefault();
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('wheel', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <footer className="footer border flex justify-center border-t-[#33353F] border-l-transparent border-r-transparent text-white">
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
