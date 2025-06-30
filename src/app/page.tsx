import Image from "next/image";
import CookieConsent from "../components/common/CookieConsent";

export default function Home() {
  const categories = [
    { id: "motivation", name: "Motivation", icon: "⚡" },
    { id: "goals", name: "Goal Achievement", icon: "🎯" },
    { id: "stress", name: "Stress Reduction", icon: "🧘" },
    { id: "depression", name: "Depression Relief", icon: "☀️" },
    { id: "focus", name: "Focus Enhancement", icon: "🔍" },
    { id: "dreams", name: "Dream Reprogramming", icon: "💫" },
    { id: "trauma", name: "Trauma Healing", icon: "🌱" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-r from-blue-900 via-purple-900 to-violet-900" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-green-400">
              &gt; PTSDToday<span className="animate-pulse">_</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Shape Your Future</p>
            <p className="text-lg mb-8 text-gray-400">
              Mental programming interface for subconscious restructuring.
              Utilizing targeted meditation and affirmation commands to rewrite neural patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-mono transition-colors">
                &gt; start_program()
              </button>
              <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300 py-3 px-6 rounded-md font-mono transition-colors">
                &gt; learn_more()
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-mono text-green-400 mb-2"># Select Mental Programming Module</h2>
        <p className="text-gray-400 mb-8">Choose a category to begin your neural reprogramming session</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-gray-800 border border-gray-700 hover:border-green-500 p-6 rounded-lg cursor-pointer transition-all hover:shadow-md hover:shadow-green-900/30"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-mono text-green-400 mb-2">{category.name}</h3>
              <p className="text-gray-400 text-sm">
                Specialized programming commands for {category.name.toLowerCase()} neural pathways.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mode Selection */}
      <div className="bg-black bg-opacity-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-mono text-green-400 mb-2"># Operation Modes</h2>
          <p className="text-gray-400 mb-8">Select the optimal runtime environment for your neural programming session</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg transition-all hover:border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🌅</span>
                </div>
                <h3 className="text-xl font-mono text-blue-400">Wake-up Mode</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Alarm-based programming that leverages the hypnagogic state when waking to deliver optimized neural commands.
              </p>
              <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded font-mono text-sm transition-colors">
                &gt; select_mode("wake_up")
              </button>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg transition-all hover:border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🌙</span>
                </div>
                <h3 className="text-xl font-mono text-indigo-400">Sleep Mode</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Delta wave synchronization for deep subconscious programming during sleep onset with custom voice prompts.
              </p>
              <button className="bg-indigo-900 hover:bg-indigo-800 text-white py-2 px-4 rounded font-mono text-sm transition-colors">
                &gt; select_mode("sleep")
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              PTSDToday © {new Date().getFullYear()} | Mental Programming Interface v0.1.0
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
}
