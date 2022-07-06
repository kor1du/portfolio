import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./page/Head";
import BodySkills from "./page/BodySkills";
import Nav from "./page/Nav";
import BodyProject from "./page/BodyProject";
import Footer from "./page/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <section>
        <Head></Head>
        <BodySkills></BodySkills>
        <BodyProject></BodyProject>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
