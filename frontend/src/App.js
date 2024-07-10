
import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from "./RootLayout";
import { AuthContextProvider } from "./context/AuthContext";
import { TransactionContextProvider } from "./context/TransactionContext"
import { useTransactionContext } from './context/TransactionContext';
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
      <AuthContextProvider>
        <TransactionContextProvider>
          <RootLayout />
          <Toaster />
        </TransactionContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
