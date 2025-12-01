import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StagesSectionProps {
  onSelectStage: (stage: string) => void;
}

const StagesSection = ({ onSelectStage }: StagesSectionProps) => {
  const stages = [
    {
      id: "elementary",
      title: "المرحلة الابتدائية",
      description: "من الصف الأول إلى الصف السادس",
      icon: BookOpen,
    },
    {
      id: "middle",
      title: "المرحلة الإعدادية",
      description: "من الصف السابع إلى الصف التاسع",
      icon: Award,
    },
    {
      id: "secondary",
      title: "المرحلة الثانوية",
      description: "الصف العاشر، الحادي عشر والبكلوريا",
      icon: GraduationCap,
    },
    {
      id: "languages",
      title: "قسم اللغات",
      description: "تعلم اللغات الإنجليزية، الفرنسية والألمانية",
      icon: Globe,
    },
  ];

  return (
    <section className="min-h-screen bg-background py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-black text-center mb-16 text-foreground">
          المراحل التعليمية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-card border-border h-full"
                  onClick={() => onSelectStage(stage.id)}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default StagesSection;
