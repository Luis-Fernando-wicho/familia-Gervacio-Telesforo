import "./Header.css";

function Header() {
  const selectPage = ({ isActive }) =>
    "header_contact" + (isActive ? " header_contact_active" : "");
  return (
    <div className="header">
      <h1 className="header__text">GAD DERECHO 2026</h1>
    </div>
  );
}

export default Header;
