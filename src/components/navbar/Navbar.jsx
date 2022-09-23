import './navbar.css'
import Logo from '../../assets/img/logo.svg'

export default function Navbar() {
  return (
    <header className="header_main home">
      <div className="header_container content_col">
        <div className="nav_bar">
          <div className="logo_container">
            <a href="#">
              <img src={'<Logo/>'} alt="" />
            </a>
          </div>
          <div className="navigation">
            <a className="menu_item" href="#">Inicio</a>
            <a className="menu_item" href="#">Nosotros</a>
            <a className="menu_item" href="#">Anuncios</a>
            <a className="menu_item" href="#">Blog</a>
            <a className="menu_item" href="#">Contacto</a>
          </div>
        </div>
        <div className="title_header">
            <h1 >
                Ventas de casas y departamentos Exlusivos de lujo
            </h1>
        </div>
      </div>
    </header>
  );
}
