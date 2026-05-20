import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8 bg-[#0f0f0f] min-h-screen font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
            Framework Library
          </h1>
          <p className="text-gray-400">
            A curated list of modern development frameworks.
          </p>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworkData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#181818] border border-gray-800 p-6 rounded-2xl hover:bg-[#222222] hover:border-gray-600 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-[#1DB954] transition-colors">
                    {item.name}
                  </h2>
                  <span className="text-[10px] font-mono text-gray-500 bg-black/30 px-2 py-1 rounded border border-gray-800">
                    {item.details.releaseYear}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider font-bold bg-[#282828] text-gray-400 px-2 py-1 rounded-md border border-gray-700 group-hover:border-[#1DB954]/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-tighter">
                      Developer
                    </span>
                    <span className="text-xs font-semibold text-gray-300">
                      {item.details.developer}
                    </span>
                  </div>

                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1DB954] hover:text-[#1ed760] transition-colors"
                  >
                    Docs →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
