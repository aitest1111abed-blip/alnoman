import { motion } from "framer-motion";
import { ArrowRight, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GradesSectionProps {
  stage: string;
  onSelectGrade: (grade: string) => void;
  onBack: () => void;
}

const gradesData: Record<string, { title: string; grades: string[] }> = {
  elementary: {
    title: "المرحلة الابتدائية",
    grades: [
      "الصف الأول",
      "الصف الثاني",
      "الصف الثالث",
      "الصف الرابع",
      "الصف الخامس",
      "الصف السادس",
    ],
  },
  middle: {
    title: "المرحلة الإعدادية",
    grades: ["الصف السابع", "الصف الثامن", "الصف التاسع"],
  },
  secondary: {
    title: "المرحلة الثانوية",
    grades: [
      "الصف العاشر",
      "الصف الحادي عشر",
      "البكلوريا علمي",
      "البكلوريا أدبي",
    ],
  },
  languages: {
    title: "قسم اللغات",
    grades: ["الإنجليزية", "الفرنسية", "الألمانية"],
  },
};

const GradesSection = ({ stage, onSelectGrade, onBack }: GradesSectionProps) => {
  const stageData = gradesData[stage];

  if (!stageData) return null;

  return (
    <section className="min-h-screen bg-background py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-primary" onClick={onBack}>
              المراحل
            </span>
            <span>/</span>
            <span className="text-primary font-semibold">{stageData.title}</span>
          </div>
        </div>

        <h2 className="text-5xl font-black text-center mb-16 text-foreground">
          الصفوف المتاحة لمرحلة {stageData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stageData.grades.map((grade, index) => (
            <motion.div
              key={grade}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-card border-border"
                onClick={() => onSelectGrade(grade)}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Book className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {grade}
                  </h3>
                  <p className="text-muted-foreground">
                    انقر للاطلاع على المواد الدراسية
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="group"
        >
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          العودة لاختيار المرحلة
        </Button>
      </motion.div>
    </section>
  );
};

export default GradesSection;
