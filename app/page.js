"use client"

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const downloadResume = () => {
  const cv = "/documents/CV.pdf";
  const link = document.createElement("a");
  link.href = cv;
  link.download = "CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer
            </span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent-default"> Andreas Alexander </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer with a passion for developing frontend and backend programs depending on the user needs. I also have experience in analyzing data and developing machine learning models.  
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                className="uppercase flex items-center gap-2"
                onClick={downloadResume}
              >
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="max-w-[500px] mb-9 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover: transition-all duration-300" />
              </div>
            </div>

          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home