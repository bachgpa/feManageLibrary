// Layout for Login, sign up page
import "./loginCss.css";
function LoginLayout({ pageContent }) {
  return (
    <div className="loginLayout">
      <h1>Login Layout header</h1>
      <div className="pageContent">{pageContent}</div>
      <h1>Login Layout header</h1>
    </div>
  );
}
export default LoginLayout;
