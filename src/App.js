import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import socketIO from 'socket.io-client';
import AddEmployees from './components/AddEmployees';
import { GlobalProvider } from './Store/Globalstate';
const socket = socketIO.connect('http://localhost:1200');

function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalProvider>
          <Routes>
            <Route path="/add" element={<AddEmployees socket={socket} />}></Route>
            <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
            <Route path="/" element={<Login socket={socket}/>}></Route>
          </Routes>
        </GlobalProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;