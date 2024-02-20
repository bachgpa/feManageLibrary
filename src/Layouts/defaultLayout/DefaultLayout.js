// Layout for Primary & categories, category page
import "./defaultCss.css";
function DefaultLayout({ pageContent }) {
  console.log(pageContent);
  return (
    <div className="defaultLayout">
      <h1>default Layout header</h1>
      <div className="pageContent">{pageContent}</div>
      <h1>default Layout Footer</h1>
    </div>
  );
}
export default DefaultLayout;
