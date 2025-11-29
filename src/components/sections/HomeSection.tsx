import { motion } from "framer-motion";
import coverImage from "@/assets/cover.jpg";

const HomeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <motion.img
          src={coverImage}
          alt="معهد النعمان التعليمي"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 object-contain mb-12"
          style={{ filter: "drop-shadow(0 0 30px hsl(142 76% 36% / 0.5))" }}
        />
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6 text-foreground"
          style={{ textShadow: "0 0 30px hsl(142 76% 36% / 0.5)" }}
        >
          معهد النعمان التعليمي
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-accent"
        >
          Al-No'man Educational Institute
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 w-32 h-1 bg-accent mx-auto"
          style={{ boxShadow: "0 0 20px hsl(142 76% 36% / 0.6)" }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HomeSection;
