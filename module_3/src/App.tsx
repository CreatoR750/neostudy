import "./App.scss";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Main/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loan from "./pages/Loan/Loan";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/loan"} element={<Loan />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
