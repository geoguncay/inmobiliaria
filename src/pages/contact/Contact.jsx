import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NavMenu from "../../components/navbar/NavMenu";

const Contact = () => {
  return (
    <div className="contact container">
      <NavMenu/>
      <section className="container secction">
        <form action="#" className="contact">
          <fieldset>
            <legend>Informacion Personal</legend>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </fieldset>
        </form>
      </section>
      <Footer/>
    </div>

    // <>
    
    //   <section className="container section">
    //     <form action="#" className="contact" >
    //       <fieldset>
    //           <legend>Informacion Personal</legend>
    //           <label htmlFor="name">Nombre</label>
    //           <input type="text" name="name" id="name" placeholder="Ingrese su nombre: ">
    //           <label htmlFor="e_mail">E-mail</label>
    //           <input type="text" name="e_mail" placeholder="Ingrese el e-mail">
    //           <label htmlFor="phone">Telefono</label>
    //           <input type="tel" name="phone" placeholder="Ingrese el numero de Telefono">
    //           <label htmlFor="message">Mensaje</label>
    //           <textarea name="message" id="message" cols="30" rows="10"></textarea>
    //       <fieldset/>
    //     </form>
    //   </section>
    // </>
  )
}

export default Contact
