import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Spin as Hamburger } from "hamburger-react";
import {Link} from "react-router-dom";


export default function HumburgerMenu() {

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button>
              <Hamburger
                size={30}
                duration={0.8}
                color="white"
                toggled={open}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="fixed right-0 w-full top-[128px] ">
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        HOME
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/mint">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        MINT
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/privatechat">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        PRIVATE CHAT
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/staking">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        STAKING
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/ourbrand">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        OUR BRAND
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/communitybrand">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        COMMUNITY BRAND
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/historyandroadmap">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        HISTORY AND ROADMAP
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="https://twitter.com/eyeANDpyramid" target="_blank" rel="noreferrer">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        TWITTER
                      </button>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="https://discord.gg/Jzz48CS6WR" target="_blank" rel="noreferrer">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        DISCORD
                      </button>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a href="https://www.youtube.com/channel/UCPSend91jkkmQMRTng-TkWg" target="_blank" rel="noreferrer">
                      <button
                        className={`${
                          active
                            ? "bg-black bg-opacity-50 text-yellow-300"
                            : "bg-black bg-opacity-50 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        YUTUBE
                      </button>
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
