import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import Dashboard from "./components/page/Dashboard";
import HomePage from "./components/page/HomePage";
import { Buffer } from "buffer";

function App() {
  const CLIENT_ID = "bd260f0fcf1c497d92a7b0d37b75f3bb";
  const CLIENT_SECRET = "f30c6ecf246e41a5af9587f9d2aa0db0";

  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then((tokenresponse) => {
        setToken(tokenresponse.data.access_token);
      })
      .catch((error) => console.log(error));
  }, []);

  localStorage.setItem("token", token);

  useEffect(() => {
    navigate("/homepage");
  }, []);

  return (
    <div>
      <Background />
      <Routes>
        <Route path="/*" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
