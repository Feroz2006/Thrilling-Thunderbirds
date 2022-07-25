import { useEffect, useState, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import routes from "./config/routes";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import "./assets/scss/style.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/utils/particlesjs-config.json";

function App() {
  const [loading, setLoading] = useState(true);
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "Primer Print, serif",
      button: {
        textTransform: "none",
      },
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Particles options={particlesConfig} init={particlesInit} />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
