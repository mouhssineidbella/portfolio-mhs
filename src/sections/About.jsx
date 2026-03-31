import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Mastery",
    description:
      "Bridging the gap between robust Laravel backends and dynamic React frontends.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description:
      "Developing digital systems to optimize industrial and administrative workflows.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively within professional and associative environments.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Staying curious and adapting quickly to new technologies and technical challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-white">
              Building solutions,
              <span className="font-serif italic font-normal text-primary">
                {" "}
                one line at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Mouhssine Id-bella, a dedicated Full Stack Developer based in 
                Guelmim, Morocco. My journey in digital development is fueled by 
                a commitment to technical excellence and a drive to build tools 
                that solve real-world problems.
              </p>
              <p>
                Currently, as a Full Stack Intern at <strong>Yazaki</strong>, I am 
                architecting a <strong>Digital Quality Scrap Management System</strong> 
                using React.js and Laravel. This project reflects my approach: 
                combining clean code with functional design to improve operational 
                efficiency.
              </p>
              <p>
                With a background as a Specialized Technician in Digital Development, 
                I focus on creating seamless user experiences and robust server-side 
                logic. I thrive in environments that challenge me to learn and 
                contribute to meaningful digital products.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to transform complex challenges into simple, 
                functional, and elegant digital experiences that bring 
                tangible value to businesses."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:bg-white/5 transition-colors duration-300 group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};