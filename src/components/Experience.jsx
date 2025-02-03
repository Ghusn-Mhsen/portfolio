import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'Prosoft Software Solutions',
    period: '05.2023 - 08.2024',
    description: 'Developing scalable backend systems with Node.js, TypeScript, and MongoDB, API design, database management, Docker containerization, third-party integrations.',
  },
  {
    company: 'Freelancer',
    period: '02.2022 – 01.2023',
    description: 'Collaborated with clients to understand requirements, developed backend solutions with Node.js, designed RESTful APIs, optimized database structures with PostgreSQL and MongoDB, and managed the full development lifecycle.',
  },

]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>


            </motion.div>
          </Reveal>
        ))}

      </motion.div>


    </div>
  )
}

export default Experience