"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import { motion } from "framer-motion"

const info = [
  { 
    icon: <FaPhoneAlt />, 
    title: "Phone",
    description: "(+62) 878 7819 7989"
  },
  { 
    icon: <FaEnvelope />, 
    title: "Email",
    description: "drealexander.dev@gmail.com"
  },
  { 
    icon: <FaMapMarkerAlt />, 
    title: "Address 1",
    description: "Taman Palem Lestari, Cengkareng, West Jakarta"
  },
  { 
    icon: <FaMapMarkerAlt />, 
    title: "Address 2",
    description: "Paddington Heights Alam Sutera, Tangerang, Banten"
  },
]

const sendEmail = () => {
  emailFormat = ""
  alert("Email sent!")
}

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              <h3 className="text-4xl text-accent-default">
                Let's Work Together
              </h3>
              <p className="text-white/60">
                Let's connect and explore how we can achieve great things together!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="freelance">Freelance Software Development</SelectItem>
                    <SelectItem value="recruitment">Company Recruitment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Type Your Message Here"
              />
              {/* button */}
              <Button type="submit" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent-default rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact