import { useState } from "react";
import Button from "../UI/Button";

const AddWorked = ({onUsers}) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");


  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  }
  const wageHandler = (e) => {
    setEnteredWage(e.target.value);
  }
  
  const addedHandler = (e) => {
    e.preventDefault();

    if(enteredName.trim().length === 0){
      console.log("İsminizi yazmadınız")
      return;
    }

    if(enteredWage < 50000) {
      console.log("Geçerli bir maaş girin")
      return;
    }

    onUsers(enteredName, enteredWage)
    console.log(enteredName, enteredWage);

    setEnteredName("");
    setEnteredWage("");
  }

  const resetHandler = () => {
    setEnteredName(" ");
    setEnteredWage(" ");
  };

  return (
    <form className="formEdit" onSubmit={addedHandler}>
      <input type="text" value={enteredName} onChange={nameHandler} />
      <input type="number" value={enteredWage} onChange={wageHandler} />
      <Button type="submit">Ekle</Button>
      <Button type="button" onClick={resetHandler} className="buttonReset">Temizle</Button>
    </form>
  );
};

export default AddWorked;
