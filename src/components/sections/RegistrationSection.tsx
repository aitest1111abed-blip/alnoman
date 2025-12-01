import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface RegistrationSectionProps {
  courseName?: string;
}

const RegistrationSection = ({ courseName = "" }: RegistrationSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    courseId: courseName,
  });
  const { toast } = useToast();

  useEffect(() => {
    setFormData((prev) => ({ ...prev, courseId: courseName }));
  }, [courseName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال طلب التسجيل بنجاح",
      description: `شكراً ${formData.fullName}! سنتواصل معك على الرقم ${formData.phoneNumber} قريباً.`,
    });
    setFormData({ fullName: "", phoneNumber: "", courseId: "" });
  };

  return (
    <section className="min-h-screen bg-background py-24 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card border border-border rounded-2xl p-12 shadow-lg shadow-primary/5">
          <h2 className="text-5xl font-black text-center mb-8 text-foreground">
            تسجيل الدورة
          </h2>

          <div className="bg-primary/10 border border-primary rounded-xl p-6 mb-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">تنويه هام</h3>
            <p className="text-foreground leading-relaxed">
              أبناء وذوي شهداء الثورة السورية المباركة — جميع الدورات مجانية بالكامل على حساب معهد النعمان التعليمي والكادر الإداري
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-lg font-semibold">
                الاسم الثلاثي للطالب
              </Label>
              <Input
                id="fullName"
                placeholder="أدخل الاسم الكامل"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="h-12 bg-background border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-lg font-semibold">
                رقم الهاتف للتواصل
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="أدخل رقم الهاتف"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
                className="h-12 bg-background border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="courseId" className="text-lg font-semibold">
                الدورة المختارة
              </Label>
              <Input
                id="courseId"
                placeholder="الدورة المختارة"
                value={formData.courseId}
                onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                required
                readOnly
                className="h-12 bg-background border-border text-foreground"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-xl font-bold"
            >
              إرسال الطلب
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationSection;
