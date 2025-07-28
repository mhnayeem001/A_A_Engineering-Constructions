export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[hsl(var(--navy))] mb-6">
              About A.A. Engineering & Constructions
            </h2>
            <p className="text-lg text-[hsl(var(--concrete))] leading-relaxed mb-6">
              Under the trusted leadership of{" "}
              <strong>Engr. Mahabub Hossain Sabuj (MIEB)</strong>, A.A. Engineering
              & Constructions has established itself as a premier structural design
              and building company in Dhaka, Bangladesh.
            </p>
            <p className="text-lg text-[hsl(var(--concrete))] leading-relaxed mb-8">
              With over <strong>50+ successful projects</strong> completed, we
              specialize in end-to-end building solutions that prioritize safety,
              professionalism, and aesthetic excellence. Our commitment to compliance
              with city and municipal laws ensures every project meets the highest
              standards.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-indigo-600 text-white rounded-lg shadow-md">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-emerald-600 text-white rounded-lg shadow-md">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/mhnayeem001/Picture/main/image%20sabuj%20bhai.jpg"
              alt="Engr. Mahabub Hossain Sabuj"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-[#e02424] text-white p-4 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-xs font-medium">MIEB</div>
                <div className="text-xs">CERTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}