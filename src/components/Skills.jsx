// import {
//   DiHtml5,
//   DiCss3,
//   DiBootstrap,
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiMongodb,
//   DiGithubBadge,
// } from "react-icons/di"
// import Reveal from "./Reveal"

// const skills = [
//   {
//     category: 'Frontend',
//     technologies: [
//       { name: 'HTML5', icon: <DiHtml5 className='text-orange-600' /> },
//       { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
//       { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
//       { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
//       { name: 'React', icon: <DiReact className='text-blue-500' /> },
//     ],
//   },
//   {
//     category: 'Backend',
//     technologies: [
//       { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
//       { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
//       { name: 'React', icon: <DiReact className='text-blue-500' /> },
//       { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
//     ],
//   },
// ]

// const Skills = () => {
//   return (
//     <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
//       <Reveal>
//         <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
//         <p className="text-center mb-8">
//           I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
//         </p>

//         <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
//                         ">
//           {skills.map((skill, index) => (
//             <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg
//                                 w-full md:w-1/2">
//               <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {skill.technologies.map((tech, idx) => (
//                   <div key={idx} className="flex items-center space-x-2">
//                     <span className="text-2xl">{tech.icon}</span>
//                     <span>{tech.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Reveal>
//     </div>
//   )
// }

// export default Skills
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiResponsive,
} from "react-icons/di";
import {
  SiRedux, SiReactquery, SiReactrouter, SiCssmodules, SiTailwindcss, SiVite, SiPostgresql, SiTypescript,
  SiExpress, SiSocketdotio, SiDocker, SiSwagger, SiRedis, SiEslint, SiTestinglibrary, SiJest, SiNginx,
  SiWeb3Dotjs, SiGit, SiGitlab, SiJira, SiCplusplus
} from "react-icons/si";
import Reveal from "./Reveal";
import { FaJava } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className='text-orange-600' /> },
      { name: "CSS3", icon: <DiCss3 className='text-blue-600' /> },
      { name: "JavaScript", icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: "React", icon: <DiReact className='text-blue-500' /> },
      { name: "JSX", icon: <DiReact className='text-blue-400' /> },
      { name: "React Hooks", icon: <DiReact className='text-blue-400' /> },
      { name: "Redux Toolkit", icon: <SiRedux className='text-purple-600' /> },
      { name: "Context API", icon: <DiReact className='text-blue-500' /> },
      { name: "React Query", icon: <SiReactquery className='text-red-500' /> },
      { name: "React Router", icon: <SiReactrouter className='text-blue-500' /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className='text-teal-500' /> },
      { name: "CSS Modules", icon: <SiCssmodules className='text-blue-600' /> },
      { name: "Responsive UI", icon: <DiResponsive className='text-blue-500' /> },
      { name: "Vite", icon: <SiVite className='text-yellow-500' /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className='text-green-500' /> },
      { name: "TS", icon: <SiTypescript className='text-blue-500' /> },
      { name: "JS(ES6+)", icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: "Express", icon: <SiExpress className='text-gray-600' /> },
      { name: "Web3", icon: <SiWeb3Dotjs className='text-green-500' /> },
      { name: "Socket", icon: <SiSocketdotio className='text-gray-500' /> },
      { name: "Docker", icon: <SiDocker className='text-blue-500' /> },
      { name: "Docker Swarm", icon: <SiDocker className='text-blue-500' /> },
      { name: "Nginx", icon: <SiNginx className='text-green-500' /> },
      { name: "Unit Testing", icon: <SiTestinglibrary className='text-red-500' /> },
      { name: "E2E Testing", icon: <SiJest className='text-red-600' /> },
      { name: "Redis", icon: <SiRedis className='text-red-500' /> },
      { name: "PostgreSQL", icon: <SiPostgresql className='text-blue-600' /> },
      { name: "MongoDB", icon: <DiMongodb className='text-green-600' /> },
      { name: "Swagger", icon: <SiSwagger className='text-green-500' /> },
      { name: "JsDoc", icon: <DiReact className='text-blue-400' /> },
      { name: "ESLint", icon: <SiEslint className='text-purple-600' /> },
    ],
  },
  {
    category: "Others",
    technologies: [
      { name: "Git", icon: <SiGit className='text-red-600' /> },
      { name: "GitHub", icon: <DiGithubBadge className='text-gray-600' /> },
      { name: "GitLab", icon: <SiGitlab className='text-orange-600' /> },
      { name: "Jira", icon: <SiJira className='text-blue-600' /> },
      { name: "Java", icon: <FaJava className='text-blue-500' /> },
      { name: "OOP", icon: <DiReact className='text-blue-500' /> },
      { name: "C++", icon: <SiCplusplus className='text-blue-600' /> },

    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[900px] mx-auto flex flex-col justify-center px-6 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 border  border-purple-700 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-center text-purple-400">{skill.category}</h3>

              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg shadow-md">
                    <span className="text-sm">{tech.icon}</span>
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;

