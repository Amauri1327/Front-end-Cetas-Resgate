import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-3 mt-4">
      <div className="w-full flex flex-wrap justify-around items-center text-white italic">
        <img className="w-10 rounded-lg" src={logo} alt="Logo da Cetas Resgate" />
        <a
          href="https://www.linkedin.com/in/amauri-ferreira"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Created by Amauri M Ferreira
        </a>
      </div>
    </footer>
  );
};

export default Footer;
