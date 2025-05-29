
import { Calendar, MapPin, Coffee, Code, Camera, Palette } from "lucide-react";

export const AboutSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Creative Developer",
      description: "Leading innovative projects at the intersection of art and technology"
    },
    {
      year: "2023",
      title: "Freelance Digital Artist",
      description: "Launched independent creative studio focusing on AI-generated art"
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Built scalable web applications for creative agencies"
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      description: "Graduated with honors, specializing in creative computing"
    }
  ];

  const skills = [
    { icon: Code, name: "Creative Coding", level: 95 },
    { icon: Palette, name: "Digital Art", level: 90 },
    { icon: Camera, name: "Photography", level: 85 },
    { icon: Coffee, name: "Coffee Brewing", level: 100 }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A passionate creator at the intersection of technology and art.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Story Section */}
        <div className="space-y-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">My Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hey there! I'm a 24-year-old creative developer who believes that the most 
                beautiful solutions emerge when <span className="text-cyan-400 font-medium">technology meets artistry</span>. 
                My journey started with a curiosity about how things work and evolved into 
                a passion for creating digital experiences that inspire and engage.
              </p>
              <p>
                When I'm not coding or creating digital art, you'll find me exploring the 
                latest in AI, experimenting with generative art, or capturing the world 
                through my camera lens. I believe that <span className="text-purple-400 font-medium">every project 
                is an opportunity to push boundaries</span> and create something unique.
              </p>
              <p>
                Currently based in the digital nomad lifestyle, I work with clients 
                worldwide to bring their wildest ideas to life. Let's create something 
                amazing together!
              </p>
            </div>

            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Remote Worldwide</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar size={16} />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon size={20} className="text-purple-400" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-cyan-400">Journey Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-gray-900 relative z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-grow pb-8">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
