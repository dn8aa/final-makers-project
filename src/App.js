import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";
import MainRoutes from "./routes/MainRoutes";


function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
}

export default App;
