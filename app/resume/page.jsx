"use client"

import { FaHtml5, FaCss3, FaReact, FaPhp,FaPython, FaNodeJs, FaSwift, FaJs, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiChakraui, SiNextdotjs } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = [
  {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex vero, inventore.",
    info: [
      {fieldName: "Name", fieldValue: "Andreas Alexander"},
      {fieldName: "Phone", fieldValue: "(+62) 878 7819 7989"},
      {fieldName: "Experience", fieldValue: "2+ Years"},
      {fieldName: "Nationality", fieldValue: "Indonesian"},
      {fieldName: "Email", fieldValue: "drealexander.dev@gmail.com"},
      {fieldName: "Freelance", fieldValue: "Available"},
      {fieldName: "Language", fieldValue: "English, Indonesian"},
    ]
  }
]

const experience = {
  title: "My Experience",
  description: "My Experience including my own . Suscipit ex vero, inventore.",
  items: [
    {
      company: "Levels Living",
      position: "Software Engineer",
      duration: "Mar 2024 - May 2024",
    },
    {
      company: "Blibli",
      position: "iOS Developer",
      duration: "Feb 2023 - Feb 2024",
    },
    {
      company: "Skinfix Inc.",
      position: "Frontend Engineer",
      duration: "Feb 2022 - Apr 2022",
    },
    {
      company: "Bina Nusantara University",
      position: "Laboratory Assistant",
      duration: "Aug 2021 - Feb 2022",
    },
    {
      company: "ICPC / INC",
      position: "Programming Contestant",
      duration: "November 2021",
    },
  ]
}

const education = {
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex vero, inventore.",
  items: [
    {
      institution: "Bina Nusantara University",
      degree: "Bachelor of Computer Science",
      duration: "2020 - 2024",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex vero, inventore.",
  items: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaJs />, name: "JS" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <FaSwift />, name: "Swift" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiChakraui />, name: "ChakraUI" },
    { icon: <SiNextdotjs />, name: "Next.JS" },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          
          <div className="min-h-[70vh] w-full">
          {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((experience, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-default">{experience.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{experience.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                            <p className="text-white/60">{experience.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/* experience */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((education, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-default">{education.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{education.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                            <p className="text-white/60">{education.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/* experience */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
          {/* experience */}
            <TabsContent value="about" className="w-full">
              About Me
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume