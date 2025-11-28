import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HomeSection from "@/components/sections/HomeSection";
import CoursesSection from "@/components/sections/CoursesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection key="home" />;
      case "courses":
        return <CoursesSection key="courses" />;
      case "registration":
        return <RegistrationSection key="registration" />;
      case "why-us":
        return <WhyUsSection key="why-us" />;
      case "about":
        return <AboutSection key="about" />;
      default:
        return <HomeSection key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="pt-24"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
