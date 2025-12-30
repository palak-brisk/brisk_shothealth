"use client";

const AppFooter: React.FC = () => {
  return (
    <footer className="w-full bg-base-300 text-base-content p-4 text-center bg-secondary-600">
      <p className="text-white">
        Copyright © {new Date().getFullYear()} BriskMD – All rights reserved.
      </p>
    </footer>
  );
};

export default AppFooter;
