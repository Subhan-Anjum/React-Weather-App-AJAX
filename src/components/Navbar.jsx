// eslint-disable-next-line react/prop-types
const Navbar = ({ onToggleTheme }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>
            Weather <span>App</span>
          </h1>
        </div>

        <button onClick={onToggleTheme} className="btn">
          Change Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
