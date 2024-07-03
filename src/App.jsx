import { useState } from "react";
import AddWorker from "./components/AddWorker";
import WorkerList from "./components/WorkerList";

import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);

  const users = (enteredName, enteredWage) => {
    const newUsers = {
      id: Math.random().toString(),
      name: enteredName,
      wage: enteredWage,
    };

    setAllData((prevState) => [...prevState, newUsers]);
  };

  return (
    <>
      <h1>Personel Maaş Tablosu</h1>
      <AddWorker onUsers={users} />
      {allData.length > 0 && (
        <WorkerList allData={allData} setAllData={setAllData} />
      )}
    </>
  );
}

export default App;
