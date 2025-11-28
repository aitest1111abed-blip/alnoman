import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    courseId: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال طلب التسجيل بنجاح",
      description: "سيتم التواصل معك قريباً",
    });
    setFormData({ fullName: "", phoneNumber: "", courseId: "" });
  };

  return (
    <section className="min-h-screen py-24 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card border border-border rounded-2xl p-12 shadow-[0_0_50px_rgba(34,197,94,0.15)]">
          <h2 className="text-5xl font-black text-center mb-12 text-foreground">
            التسجيل
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-lg font-semibold">
                الاسم الكامل
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="أدخل اسمك الكامل"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="h-14 text-lg bg-background border-border focus:border-accent"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phoneNumber" className="text-lg font-semibold">
                رقم الهاتف للتواصل
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="أدخل رقم هاتفك"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
                className="h-14 text-lg bg-background border-border focus:border-accent"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="courseId" className="text-lg font-semibold">
                ID الدورة المراد التسجيل بها
              </Label>
              <Input
                id="courseId"
                type="text"
                placeholder="مثال: P001, M002, L003"
                value={formData.courseId}
                onChange={(e) =>
                  setFormData({ ...formData, courseId: e.target.value })
                }
                required
                className="h-14 text-lg bg-background border-border focus:border-accent font-mono"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-16 text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              إرسال طلب التسجيل
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RegistrationSection;
