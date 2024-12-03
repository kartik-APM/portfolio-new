import travelList from "../assets/travel-list.png";
import splitwise from "../assets/splitwise-easy.png";

export const KARTIK = 'Kartik Kumar Panday'
export const KARTIK_EMAIL = 'kartikpanda663@gmail.com'
export const KARTIK_ADDRESS = 'Bangalore, India'
export const KARTIK_PHONE_NO = '+91 - 7347711923'
export const PROJECTS = [
    {
      title: "Travel List",
      description:
        "A simple app to create and manage your travel packing list.",
      longDescription:
        "Travel List is a user-friendly web application designed to streamline travel preparation. Users can easily add and remove items, mark them as packed, and sort the list for better organization. Perfect for keeping track of essentials while traveling!",
      image: travelList,
      github:
        "https://github.com/kartik-APM/PracticeReact/tree/main/travel-list",
      live: "https://travel-essential-list.netlify.app/",
      tags: ["React JS", "Javascript"],
      features: [
        "Add and remove items",
        "Mark items as packed",
        "Sort list for better organization",
        "User-friendly interface",
        "Responsive design",
      ],
      startDate: "Jan 2023",
      endDate: "Present",
    },
    {
      title: "Splitwise App",
      description:
        "An app to split expenses and manage shared finances with friends.",
      longDescription:
        "Splitwise App is a collaborative tool designed to help users manage shared expenses and finances. With real-time updates, task creation, and team chat features, it simplifies the process of tracking and settling expenses among friends and groups.",
      image: splitwise,
      github:
        "https://github.com/kartik-APM/PracticeReact/tree/main/splitwise-easy",
      live: "https://splitwise-easy.netlify.app/",
      tags: ["React JS", "Javascript"],
      features: [
        "Real-time updates and collaboration",
        "Task creation and assignment",
        "Progress tracking and reporting",
        "Team chat and notifications",
        "File sharing and attachments",
      ],
      startDate: "Jun 2022",
      endDate: "Dec 2022",
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A weather dashboard that displays forecast data using external APIs.',
    //   longDescription: 'An intuitive weather dashboard that provides detailed weather information, forecasts, and historical data using multiple weather APIs. It offers features like interactive weather maps and location-based weather alerts to keep users informed about current and future weather conditions.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   tags: ['React', 'TypeScript', 'API', 'Chart.js'],
    //   features: [
    //     'Current weather conditions',
    //     'Weekly forecast',
    //     'Historical weather data',
    //     'Interactive weather maps',
    //     'Location-based weather alerts'
    //   ],
    //   startDate: 'Mar 2022',
    //   endDate: 'May 2022'
    // },
  ];