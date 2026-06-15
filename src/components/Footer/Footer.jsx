import "./Footer.css";
import wixoname from "../../assets/WIX-O.svg";
import wixologo from "../../assets/LOGO-WiX-O-BYN.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <a
          href="https://www.instagram.com/wix_o3d?igsh=ZjRhYms2aGxzYWlu"
          target="_blank"
          className="footer__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M16.5 7.5v.01" />
          </svg>

          <img src={wixoname} alt="wixo-name" className="wixo" />
        </a>
      </footer>
    </>
  );
}
export default Footer;
