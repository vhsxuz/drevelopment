"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from "@/components/ui/select"

import {FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import { motion } from "framer-motion"
import { useState } from "react"

import { WHATSAPP_URL } from "@/lib/contact"

const info = [
  { 
    icon: <FaWhatsapp />, 
    title: "WhatsApp",
    description: "+62 878 7819 7989",
    href: WHATSAPP_URL
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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };
  
  const sendWhatsApp = (e) => {
    e.preventDefault();

    const name = [formData.firstname, formData.lastname].filter(Boolean).join(" ");
    const text = [
      name ? `Hello Andreas, I'm ${name}.` : "Hello Andreas,",
      formData.service ? `Service: ${formData.service}` : null,
      formData.message
    ].filter(Boolean).join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

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
          <form onSubmit={sendWhatsApp} className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
            <h3 className="text-4xl text-accent-default">
              Let's Work Together
            </h3>
            <p className="text-white/60">
              Let's connect and explore how we can achieve great things together!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} className="input" />
              <Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} className="input" />
            </div>
            {/* select */}
            <Select onValueChange={handleServiceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Service</SelectLabel>
                  <SelectItem value="Freelance Software Development">Freelance Software Development</SelectItem>
                  <SelectItem value="Company Recruitment">Company Recruitment</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* textarea */}
            <Textarea 
              name="message"
              className="h-[200px]"
              placeholder="Type Your Message Here"
              onChange={handleChange}
            />

            {/* button */}
            <Button 
              type="submit" 
              className="max-w-60 flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
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
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent-default transition-all">
                          {item.description}
                        </a>
                      ) : (
                        <p className="text-white/60">{item.description}</p>
                      )}
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