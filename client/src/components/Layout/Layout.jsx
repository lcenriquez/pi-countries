import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  document.body.classList.add('appBody');
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}