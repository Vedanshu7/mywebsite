import SwiftSearchImg from '../public/project-image/cloudschool.png'
import HabbitSpaceImg from '../public/project-image/habbit-space.png'
import AppointMeetImg from '../public/project-image/appoint-meet.png'
import ParkSpotImg from '../public/project-image/park-spot.png'
import EmployeeManagementSystemImg from '../public/project-image/employee-management-system.png'
import MissingPersonReportImg from '../public/project-image/missing-person-report.png'
import VehicleSpeedDetectionImg from '../public/project-image/vehicle-speed-detection.png'
import SmartHomeImg from '../public/project-image/home-automation.png'
import PomodoroTimerImg from '../public/project-image/pomodoro-timer.png'
import VolumeLimiterImg from '../public/project-image/volume-limiter.png'
import VacFaceImg from '../public/project-image/vacface.png'
import smartskillhubImg from '../public/project-image/samrtskillhub.jpg'
import ARIVisionImg from '../public/project-image/arivision.jpg'
import bstImg from '../public/project-image/bst.png'
import ebcImg from '../public/project-image/ebc.png'
import leadImg from '../public/project-image/lead.png'
import jbtImg from '../public/project-image/jobtracker.png'
import brsImg from '../public/project-image/brs.png'
import vtransImg from '../public/project-image/vtrans.png'
import rrsImg from '../public/project-image/rrs.jpg'

import javaSvg from '../public/technology-icon/java.svg'
import javaScriptSvg from '../public/technology-icon/javascript.svg'
import typeScriptSvg from '../public/technology-icon/typescript.svg'
import pythonSvg from '../public/technology-icon/python.svg'
import cSharpSvg from '../public/technology-icon/c-sharp.svg'
import opencvSvg from '../public/technology-icon/opencv.svg'
import arduinoSvg from '../public/technology-icon/arduino.svg'
import androidSvg from '../public/technology-icon/android.svg'
import nodejsSvg from '../public/technology-icon/nodejs.svg'
import djangoSvg from '../public/technology-icon/django.svg'
import reactSvg from '../public/technology-icon/react.svg'
import EjsSvg from '../public/technology-icon/ejs.svg'
import postgresqlSvg from '../public/technology-icon/postgresql.svg'
import expressSvg from '../public/technology-icon/express.svg'
import dotNetSvg from '../public/technology-icon/dotnet.svg'
import jwtSvg from '../public/technology-icon/jwt.svg'
import mongodbSvg from '../public/technology-icon/mongodb.svg'
import electronSvg from '../public/technology-icon/electron.svg'
import redisSvg from '../public/technology-icon/redis.svg'
import azureSvg from '../public/technology-icon/azure.svg'
import dockerSvg from '../public/technology-icon/docker.svg'
import githubActionsSvg from '../public/technology-icon/github-actions.svg'
import elasticsearchSvg from '../public/technology-icon/elasticsearch.svg'
import expoSvg from '../public/technology-icon/expo.svg'
import chakraUiSvg from '../public/technology-icon/chakra-ui.svg'
import kibanaSvg from '../public/technology-icon/kibana.svg'
import digitalOceanSvg from '../public/technology-icon/digital-ocean.svg'
import pwaSvg from '../public/technology-icon/pwa.svg'
import uiKittenSvg from '../public/technology-icon/ui-kitten.svg'
import antDesignSvg from '../public/technology-icon/ant-design.svg'
import herokuSvg from '../public/technology-icon/heroku.svg'

import jestSvg from '../public/technology-icon/jest.svg'
import playwrightSvg from '../public/technology-icon/playwright.svg'
import htmlSvg from '../public/technology-icon/html-5.svg'
import cssSvg from '../public/technology-icon/css-3.svg'
import sassSvg from '../public/technology-icon/sass.svg'
import nextjsSvg from '../public/technology-icon/nextjs.svg'
import gatsbySvg from '../public/technology-icon/gatsby.svg'
import nginxSvg from '../public/technology-icon/nginx.svg'
import gitSvg from '../public/technology-icon/git-icon.svg'
import elkSvg from '../public/technology-icon/elk.svg'
import datadogSvg from '../public/technology-icon/datadog.svg'
import advancedSvg from '../public/technology-icon/advanced-logo-header.svg'
import microsvSvg from '../public/technology-icon/microservicesdotnet.svg'
import mysqlSvg from '../public/technology-icon/mysql-official.svg'
import gatewaySvg from '../public/technology-icon/gatewaylogo.svg'
import mssqlSvg from '../public/technology-icon/mssql.svg'
import phpSvg from '../public/technology-icon/php.svg'
import chromeSvg from '../public/technology-icon/chrome.svg'
import cplusSvg from '../public/technology-icon/cplus.svg'

export let projects = [
  {
    title: 'Cloud School',
    type: 'Web Application',
    projectURL: 'swift-search',
    projectImg: SwiftSearchImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A student management application for students across the UK and Ireland.',
    descriptionLong:
      'Served in a variety of capacities, including feature development, triage resolution, requirement analysis, and so on. Developed features in the .NET framework for 400+ schools and 2.5M+ students across the UK and Ireland.',
    button: {
      viewCodeUrl:'',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: "Compnay Project", img: advancedSvg },
      { name: '.Net', img: dotNetSvg },
      { name: 'C#', img: cSharpSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'MSSQL', img: mssqlSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'Azure', img: azureSvg }
    ],
  },
  {
    title: 'Smart Skill Hub',
    projectURL: 'volume-limiter',
    type: 'Web Application',
    projectImg: smartskillhubImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'The Smart Skill Hub is a cutting-edge platform designed to revolutionize skill development and knowledge acquisition.',
    descriptionLong:
      'The Smart Skill Hub is a cutting-edge platform designed to revolutionize skill development and knowledge acquisition. Built on a robust Microservice architecture using .NET WebAPI for the backend and powered by React.js for the frontend, this project represents a seamless integration of advanced technologies to deliver a powerful and user-friendly experience.',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: "Compnay Project", img: advancedSvg },
      { name: 'React', img: reactSvg },
      { name: '.NET Microservice', img: microsvSvg },
      { name: 'MSSQL', img: mssqlSvg }
    ],
  },
  {
    title: 'ARI Vision',
    type: 'Desktop Application',
    projectURL: 'habbit-space',
    projectImg: ARIVisionImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A Win-Forms-based leasing management application for a German automobile manufacturer.',
    descriptionLong:
      'Maintained a Win-Forms-based leasing management application for a German automobile manufacturer. Developed many features that help with leasing calculations, which allow users to eliminate the complexities associated with managing their car leases. Created robust API that handles the various front-end requests and translates the data into English.',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: '#',
    },
    technologyUsed: [
      { name: "Compnay Project", img: gatewaySvg },
      { name: 'Win-Forms .Net', img: dotNetSvg },
      { name: 'C#', img: cSharpSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'MSSQL', img: mssqlSvg },
    ],
  },
  {
    title: 'Lead Management System',
    type: 'Web Application',
    projectURL: 'vacface',
    projectImg: leadImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A B2B solution for lead management targeted at the 400+ car dealers across the world.',
    descriptionLong:
      'Created a B2B solution for lead management targeted at the 400+ car dealers across the world. Implemented the functions like Lead Tracking, Lead Auto- scheduling, Lead Similarity, etc. Developed an API endpoint for lead acceptance which is generic for all the formats. Utilized data analytics techniques to analyze leads data and implement lead classification strategies, resulting in increased lead hits. Deployed the solution on cloud services like Azure App Service, Azure Jobs, and Azure SQL Server.',
    button: {
      viewCodeUrl: 'https://github.com/me-heer/LeadManagementSystem',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: "Compnay Project", img: gatewaySvg },
      { name: '.Net', img: dotNetSvg },
      { name: 'C#', img: cSharpSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'MSSQL', img: mssqlSvg },
      { name: "C# Services", img: cSharpSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'Azure', img: azureSvg }
    ],
  },
  {
    title: 'Project Management Application',
    projectURL: 'volume-limiter',
    type: 'Web Application',
    projectImg: AppointMeetImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'FRAV, an advanced Project Management System, is engineered to streamline project workflows and enhance collaboration.',
    descriptionLong:
      'FRAV, an advanced Project Management System, is engineered to streamline project workflows and enhance collaboration. Leveraging a modern tech stack, FRAV employs Node.js for the backend, React for the frontend, and incorporates essential technologies such as Sequelize, Redux, JWT authentication, and is designed as a single-page application (SPA).',
    button: {
      viewCodeUrl: 'https://github.com/Vedanshu7/FRAV-Project-Management-Portal',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'React', img: reactSvg },
      { name: 'Node Js', img: nodejsSvg },
      { name: "MySQL", img: postgresqlSvg }
    ],
  },

  {
    title: 'JobTracker',
    projectURL: 'volume-limiter',
    type: 'Chrome Extension',
    projectImg: jbtImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'JobTracker is a comprehensive browser extension designed tosimplify and streamline the job application process for job seekers.',
    descriptionLong:
      'JobTracker is a comprehensive browser extension designed tosimplify and streamline the job application process for job seekers.This tool offers a wide range of features to enhance the job searchexperience.',
    button: {
      viewCodeUrl: 'https://github.com/Vedanshu7/jobtracker',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'React Js', img: reactSvg },
      { name: 'Chrome Extension', img: chromeSvg },
      { name: 'Azure', img: azureSvg },
      { name: '.NET', img: dotNetSvg },
      { name: "MSSQL", img: mssqlSvg }
    ],
  },

  {
    title: 'Book Recommendation System',
    projectURL: 'appoint-meet',
    type: 'Web Application',
    projectImg: brsImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'An e-commerce website for books that uses various filtering methods for recommendation, such as collaborative and content-based filtering.',
    descriptionLong:
      'Created an e-commerce website for books that uses various filtering methods for recommendation, such as collaborative and content-based filtering. Analyzed the data by Pearson Correlation and Cosine Similarity on 2M+ data records of users and books. Computed user similarity based on book rating data, data was partially taken from data and the other half from real-time user input.',
    button: {
      viewCodeUrl: 'https://github.com/Vedanshu7/Book-Recommendation-System',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Python', img: pythonSvg },
      { name: 'Django', img: djangoSvg },
      { name: 'Mongodb', img: mongodbSvg },
      { name: 'JWT', img: jwtSvg },
      { name: 'Heroku', img: herokuSvg },
    ],
  },
  {
    title: 'Eager Beavers Club Website',
    projectURL: 'park-spot',
    type: 'Web Application',
    projectImg: ebcImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A web application that promotes events and is easy to use and appealing for users.',
    //   'Park Spot is a mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. This application collects data on each entry and exit of the vehicle and analyses it for the best business decisions.',
    descriptionLong:
      'Developed a web application that promotes events and is easy to use and appealing for users. Created a back-end in Core PHP to provide e-certificate for key events. Enhanced the application with the help of Single Sign On, so that only university students can access the portal for e-certificate.',
    button: {
      viewCodeUrl:
        '',
      viewProjectUrl: 'https://eagerbeavers.charusat.ac.in/',
    },
    technologyUsed: [
      { name: 'PHP', img: phpSvg },
      { name: 'MSSQL', img: mssqlSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'JWT', img: jwtSvg },
    ],
  },
  {
    title: 'Mobile Application For V-Trans Company',
    projectURL: 'employee-management-system',
    type: 'Mobile Application',
    projectImg: vtransImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Revolutionize your logistics with our mobile application designed exclusively for V-Trans Transport Company.',
    descriptionLong:
      'Experience seamless digital document management with this cutting-edge mobile application developed for V-Trans Transport Company. The app streamlines operations by providing drivers with a secure platform for managing and accessing digital documents, enhancing efficiency and reducing paperwork. Stay organized and connected with V-Trans on the go!',
    button: {
      viewCodeUrl:
        '',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Android', img: androidSvg },
      { name: 'MSSQL', img: mssqlSvg },
      { name: 'JavaScript', img: javaScriptSvg },
      { name: 'JWT', img: jwtSvg },
      { name: '.NET', img: dotNetSvg },
    ],
  },
  {
    title: 'Home Automation Using IOT',
    projectURL: 'smart-home',
    type: 'Android Application and IoT',
    projectImg: SmartHomeImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Experience the future of home living with our \'Home Automation Using IoT\' project—a seamless integration of an Android application and IoT technology.',
    descriptionLong:
      'Experience the future of home living with our \'Home Automation Using IoT\' project—a seamless integration of an Android application and IoT technology. This innovative application empowers users to control their home appliances effortlessly, responding to their actions in real-time. From turning lights on and off to managing household devices remotely, users have unparalleled convenience at their fingertips. The app also introduces a timer feature, allowing users to schedule appliance operations at their convenience. Powered by Arduino and Android, this project embodies the synergy of cutting-edge hardware and software for a smarter, more connected home. Explore the boundless possibilities of home automation, making life not just easier but smarter.',
    button: {
      viewCodeUrl: 'https://github.com/Vedanshu7/Home-Automation-Using-IOT-Android',
      viewProjectUrl:
        '',
    },
    technologyUsed: [
      { name: 'Arduino', img: arduinoSvg },
      { name: 'Android', img: androidSvg },
    ],
  },
  {
    title: 'Retail Recommendation System',
    projectURL: 'volume-limiter',
    type: 'Windows Application',
    projectImg: rrsImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Recommendation System for E Commerce Website it use the apriori algorithm for basket analysis.',
    descriptionLong:
      'Recommendation System for E Commerce Website it use the apriori algorithm for basket analysis. Online Retail Dataset from kaggle',
    button: {
      viewCodeUrl: '',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Python', img: pythonSvg },
      { name: 'Electron', img: electronSvg },
    ],
  },
  {
    title: 'BST Visualizer',
    projectURL: 'volume-limiter',
    type: 'C++ Console Application',
    projectImg: bstImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'The BST Visualizer project is a captivating C++ endeavor that transforms the abstract concept of binary search trees into a visually stunning experience.',
    descriptionLong:
      'The BST Visualizer project is a captivating C++ endeavor that transforms the abstract concept of binary search trees into a visually stunning experience. Utilizing the graphics.h library, each node emerges as a circle, interconnected by lines that dynamically adjust as new elements are added. This interactive visualization allows users to witness the real-time growth of their binary search tree, providing a unique understanding of its evolving structure. With user-friendly menus, the project enables seamless element insertion and exploration of in-order, pre-order, and post-order traversals. Whether you\'re a seasoned coder or just diving into programming, BST Visualizer promises an enlightening and visually engaging journey into the world of binary trees.',
    button: {
      viewCodeUrl: 'https://github.com/Vedanshu7/Binary-Search-Tree-Visualization-With--CPP',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'C++', img: cplusSvg }
    ],
  }
]
// export default project

export let technologyList = [
  { name: 'HTML', icon: htmlSvg },
  { name: 'CSS', icon: cssSvg },
  { name: 'Java', icon: javaSvg },
  { name: 'JavaScript', icon: javaScriptSvg },
  { name: 'TypeScript', icon: typeScriptSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'C#', icon: cSharpSvg },
  { name: 'React', icon: reactSvg },
  { name: 'Git', icon: gitSvg },
  { name: 'React Native', icon: reactSvg },
  { name: 'Node Js', icon: nodejsSvg },
  { name: 'ExpressJs', icon: expressSvg },
  { name: '.NET', icon: dotNetSvg },
  { name: 'Django', icon: djangoSvg },
  { name: 'MongoDB', icon: mongodbSvg },
  { name: 'PostgreSql', icon: postgresqlSvg },
  { name: 'Redis', icon: redisSvg },
  { name: 'Docker', icon: dockerSvg },
  { name: 'Github Actions', icon: githubActionsSvg },
  { name: 'Heroku', icon: herokuSvg },
  { name: 'Azure', icon: azureSvg },
  { name: 'PHP', icon: phpSvg },
  { name: '.NET Microservice', icon: microsvSvg },
  { name: 'MSSQL', icon: mssqlSvg },
  { name: 'C++', icon: cplusSvg },
  { name: 'Chrome Extension', icon: chromeSvg },
]
