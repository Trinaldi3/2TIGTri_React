import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-[#0f0f0f] min-h-screen font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Explore Frameworks</h1>
          <p className="text-gray-400">Discover the best tools for your next big project.</p>
        </header>

        
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search framework name or description..."
              value={searchTerm}
              
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 bg-[#1e1e1e] border border-gray-800 focus:border-[#1DB954] rounded-xl outline-none text-sm text-gray-200 placeholder-gray-500 transition-all shadow-lg"
            />
          </div>

          <select
            value={selectedTag}
           
            onChange={(e) => setSelectedTag(e.target.value)}
            className="p-4 bg-[#1e1e1e] border border-gray-800 focus:border-[#1DB954] rounded-xl outline-none text-sm text-gray-200 cursor-pointer transition-all shadow-lg min-w-[150px]"
          >
            <option value="">All Categories</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

       
        {filteredFrameworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#181818] border border-gray-800 p-6 rounded-2xl hover:bg-[#222222] hover:border-gray-600 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-[#1DB954] transition-colors">
                      {item.name}
                    </h2>
                    <span className="text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded">
                      {item.details.releaseYear}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold bg-[#282828] text-gray-300 px-2 py-1 rounded-md border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-xs text-gray-500 italic">
                      by {item.details.developer}
                    </span>
                    <a
                      href={item.details.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#1DB954] hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          
          <div className="text-center py-20 bg-[#181818] rounded-3xl border border-dashed border-gray-800">
            <p className="text-gray-500 italic text-lg">
              No frameworks match your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}