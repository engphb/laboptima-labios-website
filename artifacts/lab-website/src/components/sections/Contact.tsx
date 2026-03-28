import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(5, "Assunto obrigatório"),
  message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    reset();
    toast({
      title: "Mensagem Enviada!",
      description: "Recebemos sua mensagem e entraremos em contato em breve.",
      variant: "default",
    });
  };

  return (
    <section id="contato" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-primary p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-6 text-white">Fale Conosco</h3>
                <p className="text-blue-100 mb-12 text-lg">
                  Tem interesse em nossas pesquisas ou gostaria de utilizar nossos serviços? Mande uma mensagem.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1 text-white">Endereço</h5>
                      <p className="text-blue-100 leading-relaxed">
                        LaBioS | LabOPTIMA<br/>
                        Rua Moniz Aragão, 360 - Cidade Universitária
                        Universidade Federal do Rio de Janeiro
                        Centro de Tecnologia II
                         <br/>
                        Rio de Janeiro, RJ - 21941-914
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1 text-white">Telefone</h5>
                      <p className="text-blue-100">+55 (21)  996636877</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1 text-white">E-mail</h5>
                      <p className="text-blue-100">fernando_gomes@ima.ufrj.br</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10 lg:p-12 bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? 'border-destructive focus:ring-destructive/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                      placeholder="Seu nome"
                    />
                    {errors.name && <span className="text-destructive text-sm mt-1 block">{errors.name.message}</span>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && <span className="text-destructive text-sm mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                  <input
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.subject ? 'border-destructive focus:ring-destructive/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                    placeholder="Ex: Parceria de pesquisa"
                  />
                  {errors.subject && <span className="text-destructive text-sm mt-1 block">{errors.subject.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.message ? 'border-destructive focus:ring-destructive/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all resize-none`}
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                  {errors.message && <span className="text-destructive text-sm mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
