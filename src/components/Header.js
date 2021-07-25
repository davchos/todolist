import "./css/Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div>
        <span style={{ color: "blue" }}>
          <i className="fas fa-list-alt"></i>
        </span>

        <span style={{ fontWeight: "bold" }}>{title}</span>
      </div>
    </header>
  );
};
export default Header;
