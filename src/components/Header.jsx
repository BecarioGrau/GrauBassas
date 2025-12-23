import React from 'react';
import MenuItem from './MenuItem';
import { menuData,} from '../data/data';
import logo from '../assets/img/Imagotipo_GrauBassas_horizontal.png';

export default function Header() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  function isActive(href) {
    // Normalize: treat '/' as index
    const normalized = href === '/' ? '/' : href.replace(/\/?$/, '');
    const cur = currentPath === '/' ? '/' : currentPath.replace(/\/?$/, '');
    return normalized === cur;
  }

  return (
    <header className="bg-white border-b-4 border-primary sticky top-0 z-50 overflow-visible">

      <div className="w-full flex items-stretch">
        <div className="flex items-center py-0 w-1/3 h-[80px]">
          <div className="flex flex-col leading-none">
            <img src={logo} alt="GrauBassas Logo" />
          </div>
        </div>

        <div className="flex-grow relative">
          <div className="relative h-full flex items-stretch justify-end pl-4 pr-0">
            <div className="absolute top-0 right-[-100vw] left-0 bottom-0 bg-primary select-none -z-10 w-[200vw] hover:bg-primary-dark transition-colors"
              style={{ clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

            <nav className="relative z-10 h-full">
              <ul className="flex h-full text-sm font-bold text-white uppercase tracking-wider">
                {menuData.map((item) => (
                  <li key={item.label} className="h-full group relative">
                    <a
                      href={item.href}
                      className={` hover-diagonal-bg h-full flex items-center px-12 before:[clip-path:polygon(50px_0,100%_0,calc(100%-50px)_100%,0_100%)] before:origin-center ${isActive(item.href) ? 'before:scale-x-100 before:bg-primary-dark' : ''}`}
                    >
                      {item.label}
                    </a>

                    {item.children && (
                      <ul className="absolute top-full left-0 bg-primary min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-lg">
                        {item.children.map((child) => (
                          <MenuItem key={child.label} item={child} />
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
