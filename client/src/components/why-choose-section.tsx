import {
  CheckCircle,
  Building,
  Shield,
  DollarSign,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: CheckCircle,
    title: "Licensed Engineer (MIEB)",
    description:
      "Certified professional engineer with MIEB accreditation ensuring technical competence and regulatory compliance.",
  },
  {
    icon: Building,
    title: "Comprehensive Services",
    description:
      "Complete building solutions under one roof - from initial design to final construction and approval.",
  },
  {
    icon: Shield,
    title: "Approved Plans",
    description:
      "All designs comply with RAJUK and city corporation regulations ensuring smooth approval processes.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Affordable and transparent cost structure with detailed estimates and no hidden charges.",
  },
  {
    icon: AlertTriangle,
    title: "Safety First",
    description:
      "Rigorous safety standards with comprehensive soil testing and structural analysis for every project.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "Advanced 3D modeling, digital surveying, and modern construction techniques for superior results.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0a2540] mb-4 tracking-tight">
            Why Choose A.A. Engineering?
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We combine technical expertise with professional service to deliver exceptional results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-[#f5f8fa] rounded-xl p-8 shadow-md cursor-pointer border-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#00aaff] hover:shadow-[0_0_20px_#00aaff]"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-tr from-[#00aaff] to-[#32d1ff] flex items-center justify-center text-white shadow-lg ring-2 ring-[#32d1ff] mx-auto">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a2540] mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}