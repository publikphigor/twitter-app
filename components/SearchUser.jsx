import { useEffect } from "react";
import client, { getTweet } from "../services/services";

console.log(getTweet());

const SearchUser = () => {
  return (
    <form className="w-full px-[24px] lg:px-0 lg:w-4/5 mx-auto mt-10 lg:mt-20">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter username to find a user"
          id="username"
          className="w-full px-8 py-3 border rounded-xl"
        />
        <label
          htmlFor="username"
          className="absolute text-gray-500 -translate-y-1/2 top-1/2 left-3"
        >
          @
        </label>
      </div>
      <button className="block w-full max-w-[200px] text-center px-10 py-3 mx-auto mt-4 text-white transition-colors duration-300 ease-linear rounded-md bg-sky-900 hover:bg-sky-400">
        Find User
      </button>
    </form>
  );
};

export default SearchUser;
