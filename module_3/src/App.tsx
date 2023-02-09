import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Main/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loan from "./pages/Loan/Loan";
import NotFound from "./pages/NotFound/NotFound";
import ScoringPage from "./pages/ScoringPage/ScoringPage";
import Payment from "./pages/Payment/Payment";
import DocumentSigning from "./pages/DocumentSigning/DocumentSigning";
import CodePage from "./pages/CodePage/CodePage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"*"} element={<NotFound />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/loan"} element={<Loan />} />
                <Route path={"/loan/:applicationId"} element={<ScoringPage />} />
                <Route path={"/loan/:applicationId/document"} element={<Payment />} />
                <Route path={"/loan/:applicationId/document/sign"} element={<DocumentSigning />} />
                <Route path={"/loan/:applicationId/code"} element={<CodePage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
