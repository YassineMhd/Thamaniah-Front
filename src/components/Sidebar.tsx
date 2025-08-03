'use client';

export default function Sidebar() {
  const navigationItems = [
    { name: 'Home', icon: '🏠', active: true },
    { name: 'Discover', icon: '🔍', active: false },
  ];

  const yourStuffItems = [
    { name: 'My Queue', icon: '📋', active: false },
    { name: 'My Podcasts', icon: '🎙️', active: false },
    { name: 'Recents', icon: '🕒', active: false },
  ];

  return (
    <div className="w-64 bg-gray-800 h-screen border-r border-gray-700 flex-shrink-0">
      <div className="p-4">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                item.active
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Your Stuff Section */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Your Stuff
          </h3>
          <nav className="mt-2 space-y-1">
            {yourStuffItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs text-gray-500">
            <p>PodbayClone v1.0.0 by Yassine Mouhoud</p>
            <p className="mt-1">About • All Podcasts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
