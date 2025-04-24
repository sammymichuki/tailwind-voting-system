import React from "react";
import { ShieldCheck } from "lucide-react";

/**
 * @typedef {Object} AuthLayoutProps
 * @property {React.ReactNode} children
 * @property {string} title
 * @property {string} subtitle
 */

export const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-600 w-8 h-8" />
            <span className="text-blue-600 font-semibold text-2xl">
              E-Voting
            </span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};