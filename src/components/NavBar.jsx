const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <div 
        className="md:text-4xl text-2xl font-bold uppercase tracking-tighter text-dark-brown cursor-pointer"
        onClick={() => window.open('https://www.amazon.com/s?k=prime+drink', '_blank')}
      >
        drinkslime
      </div>
    </nav>
  );
};

export default NavBar;
