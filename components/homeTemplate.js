import React from "react";
import Nav from "./nav";

export default function homeTemplate({ children, title, activeLink }) {
  return (
    <div>
      <Nav activeLink={activeLink} />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Content goes here --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-2 border-dashed border-gray-200 rounded-lg h-96">
              {children}
            </div>
          </div>
          {/* <!-- /End Content --> */}
        </div>
      </main>
    </div>
  );
}
