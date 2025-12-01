import { motion } from "framer-motion";
import { ArrowRight, Calendar, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  name: string;
  price: string;
  start: string;
  end: string;
  seats: number;
}

interface CoursesDetailSectionProps {
  stage: string;
  grade: string;
  subject: string;
  onRegister: (courseName: string) => void;
  onBack: () => void;
}

const coursesData: Record<string, Record<string, Record<string, Course[]>>> = {
  elementary: {
    "الصف الأول": {
      "اللغة العربية": [
        { name: "دورة اللغة العربية - الصف الأول", price: "15000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 15 },
        { name: "دورة القراءة والكتابة", price: "12000 ل.س", start: "1/12/2025", end: "28/2/2026", seats: 12 },
      ],
      "الرياضيات": [
        { name: "دورة الرياضيات - الصف الأول", price: "15000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 15 },
      ],
    },
  },
  middle: {
    "الصف السابع": {
      "الرياضيات": [
        { name: "دورة الرياضيات - الصف السابع", price: "20000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
      "الفيزياء": [
        { name: "دورة الفيزياء - الصف السابع", price: "20000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 8 },
      ],
    },
  },
  secondary: {
    "البكلوريا علمي": {
      "الرياضيات": [
        { name: "دورة الرياضيات - البكلوريا علمي", price: "25000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
      "الفيزياء": [
        { name: "دورة الفيزياء - البكلوريا علمي", price: "25000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
    },
    "البكلوريا أدبي": {
      "التاريخ": [
        { name: "دورة التاريخ - البكلوريا أدبي", price: "25000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
      "الجغرافيا": [
        { name: "دورة الجغرافيا - البكلوريا أدبي", price: "25000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
    },
  },
  languages: {
    "الإنجليزية": {
      "الإنجليزية للمبتدئين": [
        { name: "دورة الإنجليزية للمبتدئين", price: "18000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 12 },
      ],
      "الإنجليزية للمحادثة": [
        { name: "دورة الإنجليزية للمحادثة", price: "20000 ل.س", start: "1/12/2025", end: "31/3/2026", seats: 10 },
      ],
    },
  },
};

const CoursesDetailSection = ({ stage, grade, subject, onRegister, onBack }: CoursesDetailSectionProps) => {
  const courses = coursesData[stage]?.[grade]?.[subject] || [];

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
            <span>{subject}</span>
            <span>/</span>
            <span className="text-primary font-semibold">الدورات</span>
          </div>
        </div>

        <h2 className="text-5xl font-black text-center mb-16 text-foreground">
          الدورات المتاحة لمادة {subject}
        </h2>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border h-full hover:border-primary transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">
                      {course.name}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <span>السعر: {course.price}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>تاريخ البداية: {course.start}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>تاريخ النهاية: {course.end}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span>المقاعد المتاحة: {course.seats}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => onRegister(course.name)}
                        className="flex-1"
                      >
                        سجل الآن
                      </Button>
                      <Button
                        onClick={onBack}
                        variant="outline"
                        className="flex-1"
                      >
                        إلغاء
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground text-xl mb-8">
            لا توجد دورات متاحة حالياً لهذه المادة
          </div>
        )}

        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="group"
        >
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          العودة لاختيار المادة
        </Button>
      </motion.div>
    </section>
  );
};

export default CoursesDetailSection;
