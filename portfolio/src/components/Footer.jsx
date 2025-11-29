
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full py-6 px-4 mt-10 transform transition-transform duration-500 hover:scale-105"
      style={{ backgroundColor: "#071826" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-white">

      
        <h2 className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} Ajantha Chelladurai
        </h2>

       
        <p className="text-sm text-white/80 italic text-center">
         
           Logic builds it, passion perfects it ☆...
        </p>

       
        <div className="flex gap-6 mt-2">
          
        
          <a
            href="https://github.com/AjanthaChelladurai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

         
          <a
            href="https://www.linkedin.com/in/ajantha-chelladurai-5391b1252/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          
          <a
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=ajanthachelladurai@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110"
        >
<FaEnvelope />
</a>

        </div>
      </div>
    </footer>
  );
}
