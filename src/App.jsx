import React from "react";

export const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[600px] p-4">
        {/* <h1 className="mb-1 text-2xl font-medium text-neutral-200">
          Password Generator
        </h1> */}
        <div className="flex flex-row gap-4">
          <input
            disabled
            type="text"
            placeholder="some password"
            className="block w-full cursor-not-allowed rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 font-mono text-neutral-700 placeholder-neutral-800/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-[#a6adbb] dark:bg-black dark:text-gray-300 dark:placeholder-neutral-500 dark:focus:border-blue-300"
          />
          <button className="btn btn-outline border-2 font-medium hover:bg-[#a6adbb] hover:text-black">
            Copy
          </button>
        </div>
        <div className="divider"></div>
        <input
          type="range"
          min={8}
          max={70}
          className="range"
          defaultValue={45}
        />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text font-medium text-neutral-200">
              Include Numbers
            </span>
            <input type="checkbox" className="checkbox" id="checkbox-1" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-medium text-neutral-200">
              Include Special Characters
            </span>
            <input type="checkbox" className="checkbox" id="checkbox-2" />
          </label>
        </div>
      </div>
    </div>
  );
};
