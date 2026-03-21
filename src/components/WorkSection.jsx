const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const projects = [
  {
    title: 'Fintech Mobile Experience',
    tags: 'UX/UI • Design System • Prototyping',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    title: 'E-commerce Rebrand',
    tags: 'Branding • Web Design • Framer',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    title: 'AI Content Platform',
    tags: 'Product Design • Web App • Interaction',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-40 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-24 text-center uppercase">Selected Works</h2>

        <div className="space-y-40">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer interactive">
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-200 rounded-[2rem] overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25,1,0.5,1)' }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
                  >
                    <ArrowIcon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                <div>
                  <h3 className="text-3xl font-semibold mb-2 group-hover:text-[#8B5CF6] transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-lg">{project.tags}</p>
                </div>
                <span className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 font-medium">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
