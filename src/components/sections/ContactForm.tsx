import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SectionTitle } from '@/components/shared';
import { 
  CheckCircle2, 
  Mail, 
  User, 
  MessageSquare, 
  FileText,
  SendIcon,
  XCircle
} from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/shared';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';

// Validation schema with Zod
const formSchema = z.object({
  name: z.string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' }),
  
  email: z.string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email must be at least 5 characters' }),
  
  phone: z.string()
    .regex(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/, { 
      message: 'Enter a valid Chilean phone number (e.g. +56912345678)' 
    })
    .optional()
    .or(z.literal('')),
  
  category: z.string({
    required_error: 'Please select a category',
  }),
  
  subject: z.string()
    .min(5, { message: 'Subject must be at least 5 characters' })
    .max(100, { message: 'Subject cannot exceed 100 characters' }),
  
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(500, { message: 'Message cannot exceed 500 characters' }),
  
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

// Type inferred from schema
type FormValues = z.infer<typeof formSchema>;

// Form categories
const categories = [
  { value: 'consulta', label: 'General Inquiry' },
  { value: 'sugerencia', label: 'Suggestion' },
  { value: 'reclamo', label: 'Complaint' },
  { value: 'felicitacion', label: 'Compliment' },
  { value: 'tramite', label: 'Municipal Procedure' },
  { value: 'otro', label: 'Other' },
];

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [fieldStrengths, setFieldStrengths] = useState({
    name: 0,
    email: 0,
    subject: 0,
    message: 0,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: 'consulta',
      subject: '',
      message: '',
      termsAccepted: false,
    },
    mode: 'onChange', // Real-time validation as values change
  });

  // Monitor form changes to update field strengths
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'message' && value.message) {
        setMessageLength(value.message.length);
      }

      // Update field strengths
      const strengths = { ...fieldStrengths };
      
      if (value.name) {
        const nameLength = value.name.length;
        if (nameLength < 3) strengths.name = 1;
        else if (nameLength < 6) strengths.name = 2;
        else strengths.name = 3;
      } else {
        strengths.name = 0;
      }

      if (value.email) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email);
        if (!emailValid) strengths.email = 1;
        else if (value.email.length < 10) strengths.email = 2;
        else strengths.email = 3;
      } else {
        strengths.email = 0;
      }

      if (value.subject) {
        const subjectLength = value.subject.length;
        if (subjectLength < 5) strengths.subject = 1;
        else if (subjectLength < 10) strengths.subject = 2;
        else strengths.subject = 3;
      } else {
        strengths.subject = 0;
      }

      if (value.message) {
        const messageLength = value.message.length;
        if (messageLength < 10) strengths.message = 1;
        else if (messageLength < 50) strengths.message = 2;
        else strengths.message = 3;
      } else {
        strengths.message = 0;
      }

      setFieldStrengths(strengths);
    });

    return () => subscription.unsubscribe();
  }, [form.watch, fieldStrengths]);

  const getStrengthColor = (strength: number) => {
    if (strength === 0) return 'bg-slate-200';
    if (strength === 1) return 'bg-red-500';
    if (strength === 2) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return '';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Fair';
    return 'Good';
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate a server request
    setTimeout(() => {
      console.log('Form data:', data);
      setFormSubmitted(true);
      setIsSubmitting(false);
      form.reset();
      
      // Show success notification
      toast({
        title: "Form submitted successfully",
        description: "We will contact you soon.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle 
          title="Contáctanos"
          subtitle="Estamos aquí para atender tus inquietudes. Completa el siguiente formulario y te responderemos a la brevedad."
          titleSize="md"
          align="left"
          subtitleAlign="left"
        />

        <Card className="max-w-xl mx-auto rounded-lg shadow-lg border border-slate-100 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            {formSubmitted ? (
              <FadeInSection>
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-600 mb-6">
                    Gracias por contactarnos. Un representante se pondrá en contacto contigo pronto.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-sky-600 text-sky-600 hover:bg-sky-50 transition-colors duration-200"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              </FadeInSection>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-sky-600" />
                            Nombre
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Tu nombre completo" 
                                {...field} 
                                className="focus:ring-sky-500 focus:border-sky-500 pr-8"
                              />
                              {field.value && (
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  {form.formState.errors.name ? (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  ) : (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                              )}
                            </div>
                          </FormControl>
                          {field.value && (
                            <div className="mt-1 flex items-center space-x-2">
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div 
                                  className={cn("h-full transition-all duration-300", getStrengthColor(fieldStrengths.name))}
                                  style={{ width: `${fieldStrengths.name * 33.33}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-500">{getStrengthLabel(fieldStrengths.name)}</span>
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-sky-600" />
                            Correo Electrónico
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                type="email" 
                                placeholder="tu@correo.com" 
                                {...field} 
                                className="focus:ring-sky-500 focus:border-sky-500 pr-8"
                              />
                              {field.value && (
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  {form.formState.errors.email ? (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  ) : (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                              )}
                            </div>
                          </FormControl>
                          {field.value && (
                            <div className="mt-1 flex items-center space-x-2">
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div 
                                  className={cn("h-full transition-all duration-300", getStrengthColor(fieldStrengths.email))}
                                  style={{ width: `${fieldStrengths.email * 33.33}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-500">{getStrengthLabel(fieldStrengths.email)}</span>
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <span className="mr-2 text-sky-600">📞</span>
                            Teléfono (opcional)
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="+56 9 1234 5678" 
                                {...field} 
                                className="focus:ring-sky-500 focus:border-sky-500 pr-8"
                              />
                              {field.value && (
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  {form.formState.errors.phone ? (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  ) : (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormDescription className="text-xs text-slate-500">
                            Formato: +56 9 1234 5678
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <span className="mr-2 text-sky-600">📋</span>
                            Categoría
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="focus:ring-sky-500 focus:border-sky-500">
                                <SelectValue placeholder="Seleccione una categoría" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-sky-600" />
                          Asunto
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Asunto de tu mensaje" 
                              {...field} 
                              className="focus:ring-sky-500 focus:border-sky-500 pr-8"
                            />
                            {field.value && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                {form.formState.errors.subject ? (
                                  <XCircle className="h-4 w-4 text-red-500" />
                                ) : (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                )}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        {field.value && (
                          <div className="mt-1 flex items-center space-x-2">
                            <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className={cn("h-full transition-all duration-300", getStrengthColor(fieldStrengths.subject))}
                                style={{ width: `${fieldStrengths.subject * 33.33}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-slate-500">{getStrengthLabel(fieldStrengths.subject)}</span>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2 text-sky-600" />
                          Mensaje
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea 
                              placeholder="Escribe tu mensaje aquí..." 
                              className="min-h-[120px] focus:ring-sky-500 focus:border-sky-500 pr-8" 
                              {...field} 
                            />
                            {field.value && (
                              <div className="absolute right-3 top-8 transform -translate-y-1/2">
                                {form.formState.errors.message ? (
                                  <XCircle className="h-4 w-4 text-red-500" />
                                ) : (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                )}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <div className="flex justify-between items-center mt-1">
                          {field.value && (
                            <div className="flex items-center space-x-2 flex-1">
                              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div 
                                  className={cn("h-full transition-all duration-300", getStrengthColor(fieldStrengths.message))}
                                  style={{ width: `${fieldStrengths.message * 33.33}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-slate-500">{getStrengthLabel(fieldStrengths.message)}</span>
                            </div>
                          )}
                          <span className={cn(
                            "text-xs",
                            messageLength === 0 ? "text-slate-400" :
                            messageLength < 10 ? "text-red-500" :
                            messageLength > 450 ? "text-yellow-500" : "text-green-500"
                          )}>
                            {messageLength}/500
                          </span>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Acepto los términos y condiciones de privacidad
                          </FormLabel>
                          {form.formState.errors.termsAccepted && (
                            <FormMessage />
                          )}
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className={cn(
                      "w-full transition-colors duration-200 flex items-center justify-center",
                      Object.keys(form.formState.errors).length > 0 
                        ? "bg-slate-400 cursor-not-allowed" 
                        : "bg-sky-600 hover:bg-sky-700"
                    )}
                    disabled={isSubmitting || Object.keys(form.formState.errors).length > 0}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <SendIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm; 