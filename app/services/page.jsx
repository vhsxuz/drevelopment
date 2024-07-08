"use client"

import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description: "Develop application user interface based on the user requirements.",
    href: "/contact"
  },
  {
    num: "02",
    title: "Backend Development",
    description: "Develop backend services which resulting in API service based on the user needs.",
    href: "/contact"
  },
  {
    num: "03",
    title: "Data analytics",
    description: "Research, scrape, and analyze data based on the user needs.",
    href: "/contact"
  },
  {
    num: "04",
    title: "Research & Development",
    description: "Helps user research on new technologies and documents the results.",
    href: "/contact"
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          { services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover"> { service.num } </div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500"> 
                  { service.title } 
                </h2>
                {/* description */}
                <p className="text-white/60"> 
                  { service.description } 
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services