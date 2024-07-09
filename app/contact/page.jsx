"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { useState } from "react"

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
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
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID, 
      process.env.NEXT_PUBLIC_TEMPLATE_ID,{
        ...templateParams
      },
      process.env.NEXT_PUBLIC_USER_ID).
      then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("EMAIL SENT")
      }).catch((err) => {
        console.log('FAILED...', err);
        alert("SEND EMAIL FAILED")
      });
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
          <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
            <h3 className="text-4xl text-accent-default">
              Let's Work Together
            </h3>
            <p className="text-white/60">
              Let's connect and explore how we can achieve great things together!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} className="input" />
              <Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} className="input" />
              <Input type="email" name="email" placeholder="Email" onChange={handleChange} className="input" />
              <Input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} className="input" />
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
              className="max-w-40"
            >
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