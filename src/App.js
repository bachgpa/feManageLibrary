import {
  Routes,
  Route,
  // Link,
  BrowserRouter,
} from "react-router-dom";
import { createContext, useState } from "react";

import "./App.css";
import {
  DefaultLayout,
  LoginLayout,
} from "./Layouts/index.js";
import PrimaryPage from "./Pages/PrimaryPage";
import LoginPage from "./Pages/LoginPage";
import CategoriesPage from "./Pages/CategoriesPage";
import UserPage from "./Pages/UserPage.js";

export const webThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <webThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout
                pageContent={<PrimaryPage />}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <DefaultLayout
                pageContent={<CategoriesPage />}
              />
            }
          />
          <Route
            path="/user/:id"
            element={
              <DefaultLayout pageContent={<UserPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <LoginLayout pageContent={<LoginPage />} />
            }
          />
        </Routes>
      </BrowserRouter>
    </webThemeContext.Provider>
  );
}

export default App;
