import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen py-24 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-5xl font-black text-center mb-12 text-foreground">
          نبذة تعريفية
        </h2>

        <div className="bg-card border border-border rounded-2xl p-12 shadow-[0_0_50px_rgba(34,197,94,0.15)]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              <span className="text-accent font-bold text-2xl">معهد النعمان التعليمي</span>{" "}
              هو صرح تعليمي متميز يهدف إلى تقديم أفضل الخدمات التعليمية للطلاب في جميع المراحل الدراسية.
            </p>

            <p className="text-muted-foreground">
              نحن نؤمن بأن التعليم هو المفتاح الأساسي لبناء مستقبل مشرق، ولذلك نسعى جاهدين لتوفير بيئة تعليمية محفزة تساعد الطلاب على تحقيق أهدافهم الأكاديمية.
            </p>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
              <h3 className="text-2xl font-bold text-accent mb-4">خدماتنا</h3>
              <ul className="space-y-3 text-foreground">
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

            <p className="text-muted-foreground">
              انضم إلينا اليوم وكن جزءاً من عائلة معهد النعمان التعليمي، حيث نعمل معاً لتحقيق التفوق والنجاح.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
