import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SubjectsSectionProps {
  stage: string;
  grade: string;
  onSelectSubject: (subject: string) => void;
  onBack: () => void;
}

const subjectsData: Record<string, Record<string, string[]>> = {
  elementary: {
    "الصف الأول": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية"],
    "الصف الثاني": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية", "العلوم"],
    "الصف الثالث": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية", "العلوم", "اللغة الإنجليزية"],
    "الصف الرابع": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية", "العلوم", "اللغة الإنجليزية", "التربية الفنية"],
    "الصف الخامس": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية", "العلوم", "اللغة الإنجليزية", "التربية الفنية", "الاجتماعيات"],
    "الصف السادس": ["اللغة العربية", "الرياضيات", "التربية الدينية", "التربية الوطنية", "العلوم", "اللغة الإنجليزية", "التربية الفنية", "الاجتماعيات"],
  },
  middle: {
    "الصف السابع": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية", "الاجتماعيات"],
    "الصف الثامن": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية", "الاجتماعيات"],
    "الصف التاسع": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية", "الاجتماعيات"],
  },
  secondary: {
    "الصف العاشر": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية", "التاريخ", "الجغرافيا"],
    "الصف الحادي عشر": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية", "التاريخ", "الجغرافيا"],
    "البكلوريا علمي": ["اللغة العربية", "الرياضيات", "الفيزياء", "الكيمياء", "الأحياء", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية"],
    "البكلوريا أدبي": ["اللغة العربية", "التاريخ", "الجغرافيا", "الفلسفة", "علم النفس", "اللغة الإنجليزية", "التربية الوطنية", "التربية الدينية"],
  },
  languages: {
    "الإنجليزية": ["الإنجليزية للمبتدئين", "الإنجليزية للمتوسطين", "الإنجليزية للمتقدمين", "الإنجليزية للأطفال", "الإنجليزية للمحادثة"],
    "الفرنسية": ["الفرنسية للمبتدئين", "الفرنسية للمتوسطين", "الفرنسية للمتقدمين", "الفرنسية للأطفال", "الفرنسية للمحادثة"],
    "الألمانية": ["الألمانية للمبتدئين", "الألمانية للمتوسطين", "الألمانية للمتقدمين", "الألمانية للأطفال", "الألمانية للمحادثة"],
  },
};

const SubjectsSection = ({ stage, grade, onSelectSubject, onBack }: SubjectsSectionProps) => {
  const subjects = subjectsData[stage]?.[grade] || [];

  if (subjects.length === 0) return null;

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
            <span>المراحل</span>
            <span>/</span>
            <span>{grade}</span>
            <span>/</span>
            <span className="text-primary font-semibold">المواد</span>
          </div>
        </div>

        <h2 className="text-5xl font-black text-center mb-16 text-foreground">
          المواد الدراسية للصف {grade}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-card border-border"
                onClick={() => onSelectSubject(subject)}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {subject}
                  </h3>
                  <p className="text-muted-foreground">
                    انقر للاطلاع على الدورات المتاحة
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
          العودة لاختيار الصف
        </Button>
      </motion.div>
    </section>
  );
};

export default SubjectsSection;
