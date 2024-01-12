import React from "react";

function Footer() {
  return (
    <footer className="bg-dark-primary text-white text-center p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-lg">Company Name</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Follow Us</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
