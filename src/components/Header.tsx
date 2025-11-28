import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const navItems = [
    { id: "home", label: "الصفحة الرئيسية" },
    { id: "courses", label: "الدورات المتاحة" },
    { id: "registration", label: "التسجيل" },
    { id: "why-us", label: "لماذا نحن" },
    { id: "about", label: "نبذة تعريفية" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img 
          src={logo} 
          alt="معهد النعمان التعليمي" 
          className="h-16 w-auto object-contain"
        />
        
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-lg font-semibold transition-all duration-300 hover:text-accent relative ${
                activeSection === item.id ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
