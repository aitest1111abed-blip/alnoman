import { motion } from "framer-motion";
import { Award, Users, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "جودة التعليم",
    description: "نقدم تعليماً عالي الجودة يتماشى مع المنهاج السوري الرسمي",
  },
  {
    icon: Users,
    title: "كادر متميز",
    description: "فريق من المعلمين ذوي الخبرة والكفاءة العالية",
  },
  {
    icon: BookOpen,
    title: "مناهج شاملة",
    description: "تغطية كاملة للمنهاج الدراسي بجميع المراحل",
  },
  {
    icon: Target,
    title: "نتائج مضمونة",
    description: "سجل حافل بالنجاحات والتفوق الأكاديمي",
  },
];

const WhyUsSection = () => {
  return (
    <section className="min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-5xl font-black text-center mb-16 text-foreground">
          لماذا نحن
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-card border-border hover:border-accent transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
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

export default WhyUsSection;
