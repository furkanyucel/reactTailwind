import React from "react";

const WorkerList = ({ allData, setAllData }) => {

  const deleteHandler = (id) => {
    setAllData(allData.filter((item) => item.id !== id));
  };

  return (
    <form className="form-result">
      <h2>Personel Maaş Sonuçları</h2>
      <ul>
        {allData.map((data) => (
          <li key={data.id} onClick={() => deleteHandler(data.id)}>
            <span>{data.name}</span>
            <span>{data.wage}</span>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default WorkerList;
