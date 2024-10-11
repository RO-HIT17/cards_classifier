import React from 'react';

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </div>
  );
};

export default SignUpLayout;