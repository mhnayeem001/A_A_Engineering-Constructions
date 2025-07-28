import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PhoneCall, MailIcon, MapPin, UserCircle2 } from "lucide-react";
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will contact you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/mhnayeem001/Picture/main/broiconn.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(50% - 96px) center", // 1 inch left shift (~96px)
        backgroundSize: "200px auto",
        backgroundAttachment: "fixed", // <-- fixed background here
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/90 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's Talk</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have a project in mind? Reach out and let's build something great together.
            </p>

            <div className="space-y-6 text-gray-800">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Phone:</span>
                <span className="ml-1 text-gray-500">+880 17 1407 6190</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Email:</span>
                <span className="ml-1 text-gray-500">aaec.gazipur20@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Location:</span>
                <span className="ml-1 text-gray-500">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <UserCircle2 className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Owner:</span>
                <span className="ml-1 text-gray-500">Engr. Mahabub Hossain Sabuj (MIEB)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="https://www.facebook.com/aaecgazipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium text-center hover:bg-blue-700 transition"
                >
                  Visit Company Page
                </a>
                <a
                  href="https://www.facebook.com/sabuj.mist.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium text-center hover:bg-blue-700 transition"
                >
                  Visit Owner Profile
                </a>
              </div>

              <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl text-center font-medium shadow">
                Thanks for connecting with A.A. Engineering & Constructions. We value your trust and partnership.
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="John Doe"
                  className="w-full"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="example@mail.com"
                  className="w-full"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-red-600 hover:bg-green-600 text-white py-3 text-lg font-semibold rounded-lg transition-colors duration-300 ease-in-out"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}