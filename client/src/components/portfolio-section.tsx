import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/residential%202.jpg",
    title: "4-Storied Residential Building - Gazipur",
    description:
      "A modern four-storied residential building in Gazipur, designed with optimal structural integrity and safety.",
    type: "Residential",
    year: "2023",
  },
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/mosque1.jpg",
    title: "Four-Storied Mosque Project",
    description:
      "This four-storied mosque reflects a harmonious blend of spiritual purpose and structural excellence, designed with safety and long-term durability in mind.",
    type: "Religious",
    year: "2024",
  },
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/triplex.jpg",
    title: "Triplex Residential Villa - Kapasia, Gazipur",
    description:
      "A luxurious triplex villa in Kapasia, Gazipur featuring modern architecture, spacious interiors, and premium finishes. Designed for elegant living with comfort, style, and functionality in mind.",
    type: "Residential",
    year: "2024",
  },
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/industrial%201.jpg",
    title: "Gazipur Sadar Deed Writers and Vendor Welfare Association",
    description:
      "A dedicated office building designed for the association, ensuring efficient space for legal services and organizational activities in Gazipur Sadar.",
    type: "Institutional",
    year: "2024",
  },
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/residential4.jpg",
    title: "Residential Building – Savar, Dhaka",
    description:
      "A newly constructed residential project in Savar, Dhaka featuring optimized space design and modern living facilities.",
    type: "Residential",
    year: "2023",
  },
  {
    image: "https://raw.githubusercontent.com/mhnayeem001/Picture/main/residential%205.jpg",
    title: "Modern Residential Project - Gazipur",
    description:
      "A sleek, well-planned residential building offering comfortable and secure urban living in Gazipur.",
    type: "Residential",
    year: "2024",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[hsl(var(--navy))] mb-4 tracking-tight">
            Our Project Portfolio
          </h2>
          <p className="text-xl text-[hsl(var(--concrete))] max-w-3xl mx-auto">
            Showcasing our expertise through successful projects across Gazipur, Dhaka and surrounding areas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{
                    maxHeight: index === 2 ? "800px" : "500px", // taller triplex
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--navy))] mb-2">
                  {project.title}
                </h3>
                <p className="text-[hsl(var(--concrete))] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-[hsl(var(--concrete))] font-medium">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Red Box */}
        <div className="text-center mt-10">
          <a
            href="https://www.facebook.com/aaecgazipur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition duration-300"
          >
            🔗 View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}