import "./about.css";
import heroimg from "../../assets/images/Dejan.png";
import Navlink from "../../components/navlink/Navlink";

const About = () => {
  return (
    <section className="aboutus">
      <main>
        <Navlink />
        <h1>
          I design & build <br /> digital products
        </h1>
        <div className="hero-image">
          <img src={heroimg} alt="" />
        </div>
      </main>
      <section id="about-desc">
        <article className="title">
          <h2>About</h2>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero vitae
            molestias reprehenderit, nostrum similique consequuntur?
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            nisi similique nesciunt numquam hic consequatur exercitationem at
            qui autem maiores.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            tenetur ut est ducimus nobis porro maxime veniam iste, commodi
            illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            eligendi aspernatur tempora molestiae possimus perspiciatis
            architecto unde nulla ipsum repellendus error corrupti totam, quod
            consequuntur!
          </p>
          <a href="#" className="my-resume">
            My Resume
          </a>
        </article>
      </section>
    </section>
  );
};

export default About;
