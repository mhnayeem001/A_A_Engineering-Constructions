import { Building, Eye, Zap, Home, Globe, Calculator, Heart, FileText, Map, TestTube, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building,
    title: "Architectural Drawing & Structural Design",
    description: "Complete architectural drawings and structural engineering design for residential and commercial projects."
  },
  {
    icon: Eye,
    title: "Site Supervision",
    description: "Professional on-site supervision ensuring quality construction and adherence to approved plans."
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing Design",
    description: "Complete electrical and plumbing system design with proper load calculations and safety measures."
  },
  {
    icon: Home,
    title: "Duplex Building Design",
    description: "Specialized duplex building design maximizing space utilization and modern living comfort."
  },
  {
    icon: Globe,
    title: "3D Modeling & Animation",
    description: "Advanced 3D visualization and animation services for better project understanding and presentation."
  },
  {
    icon: Calculator,
    title: "Building Construction & Estimation",
    description: "Complete construction services with accurate cost estimation and transparent pricing."
  },
  {
    icon: Heart,
    title: "Interior Design",
    description: "Modern interior design solutions creating functional and aesthetically pleasing living spaces."
  },
  {
    icon: FileText,
    title: "Bank Valuation Report",
    description: "Professional property valuation reports for banking and financial institution requirements."
  },
  {
    icon: Map,
    title: "Digital Survey",
    description: "Modern digital surveying services for accurate land measurement and topographical mapping."
  },
  {
    icon: TestTube,
    title: "Soil Testing & Piling",
    description: "Comprehensive soil testing and in-situ piling services ensuring strong foundation safety."
  },
  {
    icon: CheckCircle,
    title: "Plan Approval Services",
    description: "Complete plan passing services through RAJUK, City Corporation, Municipality, and Union Parishad."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[hsl(var(--navy))] mb-4 tracking-tight">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-[hsl(var(--concrete))] max-w-3xl mx-auto">
            From initial design to final construction, we provide complete building solutions under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg cursor-pointer border-4 border-transparent transition-all duration-300 ease-in-out hover:border-[#00aaff] hover:shadow-[0_0_20px_#00aaff]"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-tr from-[#00aaff] to-[#32d1ff] flex items-center justify-center text-white shadow-lg ring-2 ring-[#32d1ff]">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--navy))] mb-3">{service.title}</h3>
                <p className="text-[hsl(var(--concrete))] leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}