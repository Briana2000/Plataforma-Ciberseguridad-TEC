import React from 'react';
import {RiAccountCircleFill} from "react-icons/ri";
import {IoIosPaper} from 'react-icons/io';
import {IoMdPeople} from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Challenges',
    path: '/admin/dashboard',
    icon: < IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/admin/dashboard',
    icon: < IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Account',
    path: '/admin/dashboard',
    icon: < RiAccountCircleFill />,
    cName: 'nav-text'
  }
];
