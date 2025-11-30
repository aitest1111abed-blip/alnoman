import { motion } from "framer-motion";
import { Award, Users, BookOpen, Target, ClipboardCheck } from "lucide-react";
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
  {
    icon: ClipboardCheck,
    title: "متابعة شهرية كاملة",
    description: "نقدّم متابعة شهرية كاملة لكل طالب، تتضمن تقريرًا تفصيليًا لولي الأمر حول مستوى الطالب، تقدّم دراسته، التزامه بالحصص، وملاحظات المدرسين، لضمان أعلى جودة تعليمية",
  },
];

const HomeSection = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-black">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white"
            style={{ textShadow: "0 0 40px hsl(142 76% 36% / 0.8)" }}
          >
            معهد النعمان التعليمي
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/80"
          >
            Al-No'man Educational Institute
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 w-32 h-1 bg-accent mx-auto"
            style={{ boxShadow: "0 0 20px hsl(142 76% 36% / 0.6)" }}
          />
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white">
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
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="bg-card/5 border-border/30 hover:border-accent transition-all duration-300 h-full backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white">
            نبذة تعريفية
          </h2>

          <div className="bg-card/5 border border-border/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(34,197,94,0.15)] backdrop-blur-sm">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white">
                <span className="text-accent font-bold text-2xl">معهد النعمان التعليمي</span>{" "}
                هو صرح تعليمي متميز يهدف إلى تقديم أفضل الخدمات التعليمية للطلاب في جميع المراحل الدراسية.
              </p>

              <p className="text-white/70">
                نحن نؤمن بأن التعليم هو المفتاح الأساسي لبناء مستقبل مشرق، ولذلك نسعى جاهدين لتوفير بيئة تعليمية محفزة تساعد الطلاب على تحقيق أهدافهم الأكاديمية.
              </p>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-bold text-accent mb-4">خدماتنا</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>المنهاج الدراسي السوري بجميع المراحل (الابتدائي - الإعدادي - الثانوي)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>دورات اللغة الإنجليزية بمستويات مختلفة</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>دورات اللغة الألمانية بمستويات مختلفة</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/70">
                انضم إلينا اليوم وكن جزءاً من عائلة معهد النعمان التعليمي، حيث نعمل معاً لتحقيق التفوق والنجاح.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative glow effects */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default HomeSection;
