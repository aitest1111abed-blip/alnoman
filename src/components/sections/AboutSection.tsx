import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-black text-center mb-12 text-foreground">نبذة تعريفية</h2>
        
        <div className="bg-card border border-border rounded-2xl p-12 shadow-lg shadow-primary/5">
          <p className="text-xl leading-relaxed mb-6 text-foreground">
            <span className="font-bold text-primary text-2xl">معهد النعمان التعليمي</span> هو صرح تعليمي متميز يهدف إلى تقديم أفضل الخدمات التعليمية للطلاب في جميع المراحل الدراسية.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
            نحن نؤمن بأن التعليم هو المفتاح الأساسي لبناء مستقبل مشرق، ولذلك نسعى جاهدين لتوفير بيئة تعليمية محفزة تساعد الطلاب على تحقيق أهدافهم الأكاديمية.
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6">معلومات التواصل والموقع</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg transition-all hover:-translate-x-1">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <strong className="block text-primary mb-1">العنوان</strong>
                  <span className="text-foreground">جبلة، العمارة فوق صيدلية بشر مثبوت، الطابق الأول</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg transition-all hover:-translate-x-1">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <strong className="block text-primary mb-1">رقم الهاتف</strong>
                  <span className="text-foreground">0999-999999</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg transition-all hover:-translate-x-1">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <strong className="block text-primary mb-1">البريد الإلكتروني</strong>
                  <span className="text-foreground">info@al-numan.edu</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg transition-all hover:-translate-x-1">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <strong className="block text-primary mb-1">ساعات العمل</strong>
                  <span className="text-foreground">السبت - الخميس: 8:00 ص - 6:00 م</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">خدماتنا</h3>
            <ul className="space-y-3 text-lg text-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 flex-shrink-0"></span>
                <span>المنهاج الدراسي السوري بجميع المراحل (الابتدائي - الإعدادي - الثانوي)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 flex-shrink-0"></span>
                <span>دورات اللغة الإنجليزية بمستويات مختلفة</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 flex-shrink-0"></span>
                <span>دورات اللغة الفرنسية بمستويات مختلفة</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 flex-shrink-0"></span>
                <span>دورات اللغة الألمانية بمستويات مختلفة</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            انضم إلينا اليوم وكن جزءاً من عائلة معهد النعمان التعليمي، حيث نعمل معاً لتحقيق التفوق والنجاح.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
