import React from "react";

import logo from "../assets/bethdoe.png";

const HomePage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full">
      {/*Component*/}
      <div className="lg:flex flex-col space-y-6 p-6 lg:px-12 lg:w-[32rem] border-r">
        <h2 className="text-lg font-semibold">Listening to:</h2>
        <div className="flex items-center gap-6">
          <img alt="" src={logo} className="rounded-lg size-28" />
          <div className="space-y-2">
            <p className="text-sm">"User" Playlist</p>
            <p className="text-2xl font-bold">Playlist Title</p>
            <p className="text-sm">Total Number of Songs:</p>
          </div>
        </div>
        <ul>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <p>1</p>
              <div className="flex gap-4">
                <img alt="" src={logo} className="size-12 rounded-lg" />
                <div>
                  <p className="font-semibold">Song Name</p>
                  <p className="text-sm">Artist Name</p>
                </div>
              </div>
            </div>
            <p>Time</p>
          </li>
        </ul>
      </div>
      {/*Component*/}
      <div className="p-6 lg:px-12 space-y-8 w-full">
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <img alt="" src={logo} className="rounded-full size-32" />
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Chris Victorio</h1>
              <div className="flex gap-8">
                <div className="lg:flex lg:gap-2">
                  <p className="text-center">0</p>
                  <p>Total Likes</p>
                </div>
                <div className="lg:flex lg:gap-2">
                  <p className="text-center">0</p>
                  <p>Playlist</p>
                </div>
              </div>
              <div className="hidden lg:flex gap-4">
                <button className="py-1 w-32 rounded-lg bg-red-500">
                  Add Friend
                </button>
                <button className="py-1 w-32 rounded-lg bg-red-500">
                  Like User
                </button>
              </div>
            </div>
          </div>
          <p>
            Hello, I'm a new user! Hello, I'm a new user! Hello, I'm a new user!
          </p>
          <div className="space-y-2">
            <p>Albums:</p>
            <ul className="flex flex-wrap gap-2">
              <li className="px-2 w-fit rounded-full bg-red-400">
                <p className="text-sm">Album 1</p>
              </li>
              <li className="px-2 w-fit rounded-full bg-red-400">
                <p className="text-sm">Album 1</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:hidden gap-4">
          <button className="py-1 w-full rounded-lg bg-red-500">
            Add Friend
          </button>
          <button className="py-1 w-full rounded-lg bg-red-500">
            Like User
          </button>
        </div>
        {/*Component*/}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Your Playlist</h2>
          <ul className="grid grid-cols-2 lg:flex gap-4">
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
          </ul>
        </div>
        {/*Component*/}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Just For You</h2>
          <ul className="grid grid-cols-2 lg:flex gap-4">
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
            <li className="flex lg:flex-col items-center gap-4 lg:gap-1">
              <img
                alt=""
                src={logo}
                className="size-12 lg:size-32 rounded-lg"
              />
              <h2 className="text-sm">Playlist Name</h2>
            </li>
          </ul>
        </div>
        {/*Component*/}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Popular Users</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
            <li>
              <img alt="" src={logo} className="size-14 rounded-full" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
