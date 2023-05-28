import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { routes } from "../routes";
import Home from "./home";
import TokenDetail from "./detail";
import { Box } from "@mui/material";
import Header from "components/Header";
import LeftBar from 'components/LeftBar'
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense>
      <Header />
      <LeftBar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Routes>
          <Route path={routes.home.index} element={<Home />} />
          <Route path={routes.tokenDetail.index} element={<TokenDetail />} />
          <Route
            path="*"
            element={<Navigate to={routes.home.index} replace />}
          />
          <Route
            path="/"
            element={<Navigate to={routes.home.index} replace />}
          />
        </Routes>
      </Box>
    </Suspense>
  );
}

export default App;
