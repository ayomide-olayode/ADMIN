import { colorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./scenes/Global/navbar";
import Sidebar from "./scenes/Global/sidebar";
import Dashboard from "./scenes/Dashboard/dashboard";
import Team from "./scenes/Team/team";
import Invoices from "./scenes/Invoices/invoices";
import Contacts from "./scenes/Contacts/contacts";
//  import Bar from "./scenes/bar";
 import Form from "./scenes/Form/form";
//  import Line from "./scenes/line";
//  import Pie from "./scenes/pie";
//  import FAQ from "./scenes/faq";
//  import Geography from "./scenes/geography";
//  import Calender from "./scenes/calender";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calender" element={<Calender />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
