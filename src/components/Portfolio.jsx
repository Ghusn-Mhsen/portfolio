import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.png"
import project7 from "../assets/project7.jpg"
import project8 from "../assets/project8.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "BookEase",
    description: "The BookEase is a React-based dashboard application designed for managing hotel bookings. It provides an intuitive interface for administrators to manage cabins, bookings, users, and settings.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/BookEase",
    },
  },
  {
    img: project2,
    title: "ModaMart is an E-commerce",
    description: "This is a React-based e-commerce app for buying clothes. It includes features like product browsing, cart management, order placement, and search functionality. The app uses the Context API for global state management and React Toastify for notifications.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/ModaMart",
    },
  },
  {
    img: project3,
    title: "Worldwise App",
    description: "Worldwise is a React-based application for exploring cities and countries. It includes features like city lists, country lists, and detailed city information. The app also implements authentication and protected routes for secure access.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/WorldWise",
    },
  },
  {
    img: project4,
    title: "Popcorn APP",
    description: "UsePopcorn is a React application that helps users to discover movies, rate them, and maintain a personalized list of watched films. Using the Open Movie Database API, user can access comprehensive movie details such as genre, cast, director, ratings, and more.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/Popcorn",
    },
  },
  {
    img: project5,
    title: "Wizardry Wheels App",
    description: "Wizardry Wheels is an App revolutionizing item transportation with virtual magic! Powered by advanced technologies like Node.js, TypeScript, Docker, Docker Swarm, and MongoDB, it features swift, magical deliveries using innovative tools, ensuring an efficient and unique delivery experience.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/Wizardry_Wheels",
    },
  },
  {
    img: project6,
    title: "Multi-Environment Dockerized Node.js App",
    description: "This project is a containerized Node.js application designed to work in both development and production environments. It leverages MongoDB, PostgreSQL, Redis, and NGINX and mongo-express services, orchestrated using Docker Compose. The app uses Express.js for the backend API and provides a robust setup for modern web development.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/codeMesh_App",
    },
  },
  {
    img: project7,
    title: "EvenTo APP",
    description: "EvenTo is a backend API designed for e-commerce platforms, offering features such as wishlist management, cart operations, order processing, user disputes, banner handling, and much more. This project is built with Node.js, Express, and MongoDB, focusing on scalability, security, and performance.",
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/EventoApp",
    },
  },
  {
    img: project8,
    title: "Furniture E-commerce",
    description: `This is a Node.js-based e-commerce platform for selling furniture using VR technologies. The platform is connected to the Ethereum network via the Truffle Framework to document sales operations.`,
    links: {
      site: "#",
      github: "https://github.com/Ghusn-Mhsen/E-commerce-back",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>

                <a href={project.links.github}
                  className='p-4 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                  <AiOutlineGithub />
                </a>

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>
  )
}

export default Portfolio