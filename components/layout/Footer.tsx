import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between mb-6">
          <div className="text-lg font-bold">Homie.io</div>
          <div className="space-x-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Homie.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
