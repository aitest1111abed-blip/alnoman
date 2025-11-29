import { motion } from "framer-motion";
import coverImage from "@/assets/cover.jpg";

const HomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={coverImage}
          alt="معهد النعمان التعليمي"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center px-4"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white"
          style={{ textShadow: "0 0 40px hsl(142 76% 36% / 0.8), 0 4px 20px rgba(0,0,0,0.8)" }}
        >
          معهد النعمان التعليمي
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent"
          style={{ textShadow: "0 0 30px hsl(142 76% 36% / 0.8), 0 2px 15px rgba(0,0,0,0.8)" }}
        >
          Al-No'man Educational Institute
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 w-32 h-1 bg-accent mx-auto"
          style={{ boxShadow: "0 0 30px hsl(142 76% 36% / 0.8)" }}
        />
      </motion.div>
      
      {/* Decorative glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HomeSection;
