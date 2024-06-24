import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import TabsComponent from "../../components/Tabs";
import axios from "axios";

const VALUES = {
  Frontend: "Frontend",
  Backend: "Backend",
  UXandUI: "UXandUI",
  IOS: "IOS",
  Android: "Android"
};

const Main = () => {
  const categoriesSelect = [
    { value: VALUES.Frontend, label: "Frontend" },
    { value: VALUES.Backend, label: "Backend" },
    { value: VALUES.UXandUI, label: "UX and UI" },
    { value: VALUES.IOS, label: "iOS" },
    { value: VALUES.Android, label: "Android" }
  ];

  const [value, setValue] = useState(categoriesSelect[0].value);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        switch (value) {
          case VALUES.Frontend:
            response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            break;
          case VALUES.Backend:
            response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            break;
          case VALUES.UXandUI:
            response = await axios.get("https://api.github.com/users/octocat/repos");
            break;
          case VALUES.IOS:
            response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            break;
          case VALUES.Android:
            response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            break;
          default:
            response = { data: null };
        }
        setData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [value]);

  return (
    <Container>
      <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue} />
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          <h2>{value}</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </Container>
  );
};

export default Main;