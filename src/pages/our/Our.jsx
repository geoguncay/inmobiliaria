import Nosotros from '../../assets/img/nosotros.jpg'
import Seguridad from "../../assets/img/icono1.svg";
import Precio from "../../assets/img/icono2.svg";
import Tiempo from "../../assets/img/icono3.svg";
import Footer from '../../components/footer/Footer';
import NavMenu from '../../components/navbar/NavMenu';
import './our.css'

function our() {
  return (  
    <div>
      <div className="container">
        <NavMenu/>
        <div className="container_title">
          <h1 className="fw_300">Conoce sobre nosotros </h1>
        </div>
        <div className="inside_container">
          <div className="img_our">
            <img src={Nosotros} alt="" />
          </div>
          <div className="text_our">
            <h2>Somos una empresa con 25 anios de experiencia</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptates modi veritatis. Doloremque incidunt, aut cumque atque
              dolorum eum ipsam est consequuntur dignissimos adipisci nemo sequi
              ea esse saepe dolore?
            </p>
            <p>
              Quam optio officia eveniet veritatis deleniti architecto excepturi
              amet illum, voluptatum velit maiores ipsa natus, dolor at
              laboriosam magnam, consequatur voluptas! Veritatis vitae neque
              voluptates, optio aspernatur sed quo harum. Placeat adipisci
              necessitatibus corrupti impedit laudantium dolorem quisquam magnam
              velit minima eum porro dolorum explicabo, sunt libero! Quaerat
              tenetur ducimus accusantium vitae fuga, quia facere! Ex adipisci
              voluptate eveniet facere.
            </p>
          </div>
        </div>
      </div>

      <section className="container section">
        <div className="container_title">
          <h1 className="fw_300">Mas sobre Nosotros</h1>
        </div>
        <div className=" more_our ">
          <div className="box_child">
            <img src={Seguridad} alt="Seguridad" />
            <h3>Seguridad</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dignissimos harum optio ut accusantium rerum consequatur sit
              itaque deleniti, nemo assumenda aspernatur. Odio, harum? Corporis
              dolor qui maxime saepe nisi.{" "}
            </p>
          </div>
          <div className="box_child">
            <img src={Precio} alt="Mejor Precio" />
            <h3>Mejor Precio</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum alias similique eius fugiat suscipit est commodi
              architecto! Voluptate eligendi ex dolorum minima voluptatem porro
              maxime magnam! Consectetur iure vitae ratione.
            </p>
          </div>
          <div className="box_child">
            <img src={Tiempo} alt="A tiempo" />
            <h3>A tiempo </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              alias nesciunt assumenda error? Laudantium enim atque dolor
              provident, nesciunt id, ullam illo repellat rerum explicabo
              quaerat voluptatem molestias totam quia!
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default our;
