import { useState } from 'react';

const experiences = [
  {
    company: 'Not Working',
    role: 'No Experience',
    period: 'Currently',
    description: [
      'I am currently not working',
      'I am currently not working',
    ],
  },

];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-3xl">
        <h2 className="flex items-center gap-4 section-heading">
          Where I've Worked
          <span className="h-px bg-border flex-1 max-w-xs"></span>
        </h2>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap text-left ${
                  activeTab === index
                    ? 'text-primary bg-primary/10 md:border-l-2 md:-ml-px border-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-4 md:py-0 md:pl-8 min-h-[300px]">
            <h3 className="text-xl font-medium text-foreground">
              {experiences[activeTab].role}{' '}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="mono text-sm text-muted-foreground mt-1 mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
