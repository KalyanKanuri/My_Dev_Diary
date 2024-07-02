const Header = () => (
  <div className="navbar bg-base-100">
    <div className="navbar-start w-1/3">
      <a className="btn btn-ghost normal-case text-xl">
        <code className="bg-base-200 px-3 py-2 rounded">
          <span className="font-mono text-lg">{'<'}</span>
          <span className="font-pacifico text-primary text-2xl">Kalyan Kanuri</span>
          <span className="font-mono text-lg">{'/>'}</span>
        </code>
      </a>
    </div>
    <div className="navbar-end w-2/3">
      {/* Desktop Menu */}
      <ul className="menu menu-horizontal px-1 hidden lg:flex justify-end w-full">
        {['Homepage', 'Education', 'Experience', 'Contributions', 'Portfolio', 'Contact Me'].map((item, index) => (
          <li key={index}>
            <a className="font-inter text-base font-semibold text-indigo-600 hover:text-green-500 transition-colors duration-300 px-3">
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Tablet Menu */}
      <ul className="menu menu-horizontal px-1 hidden md:flex lg:hidden justify-end w-full">
        {['Home', 'Edu', 'Exp', 'Contrib', 'Portfolio', 'Contact'].map((item, index) => (
          <li key={index}>
            <a className="font-inter text-sm font-semibold text-indigo-600 hover:text-green-500 transition-colors duration-300 px-2">
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {['Homepage', 'Education', 'Experience', 'Contributions', 'Portfolio', 'Contact Me'].map((item, index) => (
            <li key={index}>
              <a className="font-inter text-base font-semibold text-indigo-600 hover:text-green-500 transition-colors duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>      
    </div>
  </div>
);

export default Header;