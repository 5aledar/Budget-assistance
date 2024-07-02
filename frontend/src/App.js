
import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from "./RootLayout";
import { AuthContextProvider } from "./context/AuthContext";
import {Toaster}  from 'react-hot-toast'
function App() {
  // const { authUser } = useAuthContext();
  return (
    <>
      <AuthContextProvider>
        <RootLayout />
        <Toaster/>
      </AuthContextProvider>
    </>
  );
}

export default App;
