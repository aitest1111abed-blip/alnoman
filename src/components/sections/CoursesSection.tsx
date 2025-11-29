import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Languages, Trophy } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "primary",
    title: "التعليم الأساسي",
    icon: BookOpen,
    courses: [
      { id: "P001", name: "الصف الأول الابتدائي", description: "المنهاج السوري الكامل" },
      { id: "P002", name: "الصف الثاني الابتدائي", description: "المنهاج السوري الكامل" },
      { id: "P003", name: "الصف الثالث الابتدائي", description: "المنهاج السوري الكامل" },
      { id: "P004", name: "الصف الرابع الابتدائي", description: "المنهاج السوري الكامل" },
      { id: "P005", name: "الصف الخامس الابتدائي", description: "المنهاج السوري الكامل" },
      { id: "P006", name: "الصف السادس الابتدائي", description: "المنهاج السوري الكامل" },
    ],
  },
  {
    id: "middle",
    title: "التعليم الإعدادي",
    icon: GraduationCap,
    courses: [
      { id: "M001", name: "الصف السابع", description: "المنهاج السوري الكامل" },
      { id: "M002", name: "الصف الثامن", description: "المنهاج السوري الكامل" },
      { id: "M003", name: "الصف التاسع", description: "المنهاج السوري الكامل" },
    ],
  },
  {
    id: "secondary",
    title: "التعليم الثانوي",
    icon: Trophy,
    courses: [
      { id: "S001", name: "الصف العاشر", description: "المنهاج السوري الكامل" },
      { id: "S002", name: "الصف الحادي عشر - علمي", description: "الفرع العلمي" },
      { id: "S003", name: "الصف الحادي عشر - أدبي", description: "الفرع الأدبي" },
      { id: "S004", name: "الصف الثاني عشر - علمي", description: "الفرع العلمي" },
      { id: "S005", name: "الصف الثاني عشر - أدبي", description: "الفرع الأدبي" },
    ],
  },
  {
    id: "languages",
    title: "قسم اللغات",
    icon: Languages,
    courses: [
      { id: "L001", name: "اللغة الإنجليزية - مبتدئ", description: "من الصفر إلى الاحتراف" },
      { id: "L002", name: "اللغة الإنجليزية - متوسط", description: "تطوير المهارات" },
      { id: "L003", name: "اللغة الإنجليزية - متقدم", description: "مستوى احترافي" },
      { id: "L004", name: "اللغة الألمانية - مبتدئ", description: "من الصفر إلى الاحتراف" },
      { id: "L005", name: "اللغة الألمانية - متوسط", description: "تطوير المهارات" },
      { id: "L006", name: "اللغة الألمانية - متقدم", description: "مستوى احترافي" },
    ],
  },
];

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-5xl font-black text-center mb-8 text-foreground">
          الدورات المتاحة
        </h2>

        {/* Notice for Martyrs' Families */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-accent/10 border-2 border-accent">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-bold text-accent leading-relaxed">
                تنويه: أبناء وذوي شهداء الثورة السورية المباركة — جميع الدورات مجانية بالكامل على حساب معهد النعمان التعليمي والكادر الإداري.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="cursor-pointer"
                >
                  <Card className="bg-card border-border hover:border-accent transition-all duration-300 h-full group">
                    <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all duration-300">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.courses.length} دورة متاحة
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedCategory(null)}
              className="mb-8 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
            >
              ← العودة إلى الأقسام
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories
                .find((cat) => cat.id === selectedCategory)
                ?.courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Card className="bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden group h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {course.name}
                            </h4>
                            <p className="text-muted-foreground text-sm mb-3">
                              {course.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-accent font-mono font-bold text-sm">
                            ID: {course.id}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CoursesSection;
