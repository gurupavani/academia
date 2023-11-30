import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginPage from "./views/auth/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BillsPage from "./views/bills/BillsPage";
import Page404 from "./views/others/Page404";
import ProfilePage from './views/profile/ProfilePage';
import PaymentPage from './views/payment/PaymentPage';

function App() {
  return (
    <div style={{width:"100%"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
