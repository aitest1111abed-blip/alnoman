import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import HomeSection from "@/components/sections/HomeSection";
import StagesSection from "@/components/sections/StagesSection";
import GradesSection from "@/components/sections/GradesSection";
import SubjectsSection from "@/components/sections/SubjectsSection";
import CoursesDetailSection from "@/components/sections/CoursesDetailSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [navigationState, setNavigationState] = useState({
    stage: "",
    grade: "",
    subject: "",
    courseName: "",
  });

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    if (section === "home" || section === "stages" || section === "about") {
      setNavigationState({ stage: "", grade: "", subject: "", courseName: "" });
    }
  };

  const handleSelectStage = (stage: string) => {
    setNavigationState({ ...navigationState, stage, grade: "", subject: "", courseName: "" });
    setActiveSection("grades");
  };

  const handleSelectGrade = (grade: string) => {
    setNavigationState({ ...navigationState, grade, subject: "", courseName: "" });
    setActiveSection("subjects");
  };

  const handleSelectSubject = (subject: string) => {
    setNavigationState({ ...navigationState, subject, courseName: "" });
    setActiveSection("courses-detail");
  };

  const handleRegister = (courseName: string) => {
    setNavigationState({ ...navigationState, courseName });
    setActiveSection("registration");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection key="home" />;
      case "stages":
        return <StagesSection key="stages" onSelectStage={handleSelectStage} />;
      case "grades":
        return (
          <GradesSection
            key="grades"
            stage={navigationState.stage}
            onSelectGrade={handleSelectGrade}
            onBack={() => setActiveSection("stages")}
          />
        );
      case "subjects":
        return (
          <SubjectsSection
            key="subjects"
            stage={navigationState.stage}
            grade={navigationState.grade}
            onSelectSubject={handleSelectSubject}
            onBack={() => setActiveSection("grades")}
          />
        );
      case "courses-detail":
        return (
          <CoursesDetailSection
            key="courses-detail"
            stage={navigationState.stage}
            grade={navigationState.grade}
            subject={navigationState.subject}
            onRegister={handleRegister}
            onBack={() => setActiveSection("subjects")}
          />
        );
      case "registration":
        return <RegistrationSection key="registration" courseName={navigationState.courseName} />;
      case "about":
        return <AboutSection key="about" />;
      default:
        return <HomeSection key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
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
