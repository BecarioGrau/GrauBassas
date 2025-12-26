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
    <header className="bg-white border-b-4 border-primary sticky top-0 overflow-visible z-50">
      <nav className="flex h-20 w-full ">

          <div className="w-1/4 bg-white flex items-center justify-center">
            <img src={logo} alt="GrauBassas Logo"  className='h-12 object-contain'/>
          </div>

            <div className="w-3/4 relative flex items-center justify-end px-6 text-white">
              <div 
                className="absolute inset-0 bg-primary -z-10"
                style={{ clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)' }}
              />

            
              <ul className="flex h-full text-sm font-bold text-white uppercase tracking-wider">
                {menuData.map((item) => (
                  <li key={item.label} className="h-full group relative hover:z-20">
                    <a
                      href={item.href}
                      className={` hover-diagonal-bg h-full flex items-center px-12 before:[clip-path:polygon(50px_0,100%_0,calc(100%-50px)_100%,0_100%)] before:origin-center ${isActive(item.href) ? 'before:scale-x-100 before:bg-primary-dark' : ''}`}
                    >
                      {item.label}
                    </a>

                    {item.children && (
                      <ul className="absolute top-full left-0 bg-primary min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-lg z-50">
                        {item.children.map((child) => (
                          <MenuItem key={child.label} item={child} />
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
        </div>
        </nav>
    </header>
  );
}
