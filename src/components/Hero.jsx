import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import CardImage from '../assets/Mayank.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      {/* Background video with loop */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        onLoadedMetadata={(e) => {
          e.target.currentTime = 16; // Start playing after 16 seconds
        }}
      >
        <source src="/src/assets/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#14639c]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-white">Hi, I'm</span> <span className="text-[#72bcd4]">Mayank</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full-Stack Blockchain Developer. I develop innovative DApps, Smart Contracts, and Metaverses.
          </p>

          {/* Mobile view card */}
          <div className="md:hidden mx-auto mt-10 p-6 rounded-lg shadow-lg transform hover:rotate-3 transition-transform">
            <img className="w-58 h-58 object-cover rounded-md" src={CardImage} alt="Card Image" />
          </div>
        </div>
      </div>

      {/* Canvas animation */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute right-0 xs:bottom-10 bottom-32 flex justify-center items-center mr-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
