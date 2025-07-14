import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
