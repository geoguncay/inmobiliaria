import './navbar.css'
import NavMenu from './NavMenu';


export default function Navbar() {
  return (
    <header className=" home">
      <div className=" header_container container">
        <NavMenu/>
        <div className="title_header">
          <h1 >
            Ventas de casas y departamentos <br /> Exlusivos de lujo
          </h1>
        </div>
      </div>
    </header>
  );
}

