import { Route, Routes } from "react-router-dom";
import UsersInfo from "./pages/usersInfo";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fa8c16",
            colorInfo: "#fa8c16",
            colorSuccess: "#015707",
          },
        }}
      >
        <Routes>
          <Route path="/usersInfo" element={<UsersInfo />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
