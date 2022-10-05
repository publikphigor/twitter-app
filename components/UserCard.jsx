import React from "react";

const UserCard = () => {
  return (
    <div className="bg-white shadow">
      <div className="relative w-full h-[100px]">
        <div className="w-full h-full overflow-hidden">
          <img
            src="assets/wordpress.png"
            alt="User Profile Banner"
            className="object-cover w-full"
          />
        </div>
        <img
          src="assets/Koladele-Olaitan.png"
          alt="User Profile Picture"
          className="absolute z-10 w-12 h-12 rounded-full -bottom-5 left-5"
        />
      </div>
      <div className="relative p-4">
        <ion-icon
          name="star-outline"
          className="absolute text-2xl cursor-pointer text-sky-900 right-4 top-4"
        ></ion-icon>
        {/* {<ion-icon name="star"></ion-icon>} */}
        <h2 className="mt-2 text-2xl font-bold leading-[1]">publikphigor</h2>
        <h3 className="mt-1 mb-2 text-gray-400 leading-[1]">@publikphigor</h3>
        <p className="leading-[1.5] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda aperiam laudantium
          incidunt laborum.
        </p>
        <div className="flex items-center gap-3">
          <h2 className="font-medium">
            Followers: <span>3M</span>
          </h2>
          <h2 className="font-medium">
            Following: <span>300</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;