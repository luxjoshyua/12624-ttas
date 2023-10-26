import hero from "/assets/images/hero.jpg";

const Hero = () => (
  <header className="hero flex flex-col items-center justify-center p-0 text-center h-auto">
    <img
      src={hero}
      alt="hero"
      className="w-full h-full z-[-1] absolute left-0 object-cover"
    />
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-100 text-white z-10">Hello World</h1>
    </div>
  </header>
);

export default Hero;
