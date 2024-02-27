// Layout for Primary & categories, category page
import "./defaultCss.css";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

function DefaultLayout({ pageContent }) {
  return (
    <div className="defaultLayout">
      <Header />
      <div className="pageContent">{pageContent}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
