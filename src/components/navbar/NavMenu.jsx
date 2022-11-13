import './navbar.css'
import logo from '../../assets/img/logo.svg'
import { NavLink , Link} from 'react-router-dom';


const NavMenu = () => {
  return (
      <div className="nav_bar">
        <div className="logo_container">
          <Link to={"/inmobiliaria"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="menu">
          {routes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.to}>{route.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default NavMenu;


const routes = [
  {
    id: 1,
    to: '/inmobiliaria',
    text: 'Inicio'
  },
  {
    id: 2,
    to: '/our',
    text: 'Nosotros'
  },
  {
    id: 3,
    to: '/ads',
    text: 'Anuncios'
  },
  {
    id: 4,
    to: '/blog',
    text: 'Blog'
  },
  {
    id: 5,
    to: '/contact',
    text: 'Contacto'
  }
];

export { routes };