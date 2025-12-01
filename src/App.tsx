import { useState } from "react";
import "./App.css";
import DisplayPairs from "./Components/DisplayPairs";
import AddParticipants from "./Components/AddParticipants";
import DisplayParticipants from "./Components/DisplayParticipants";

function App() {
  const [allParticipants, setAllParticipants] = useState<string[]>([]);

  // store pairs inside React state so you can show them later
  const [pairs, setPairs] = useState<Map<string, string>>(new Map());

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onAddParticipant = (p: string) => {
    const newList: string[] = [...allParticipants];

    if (newList.includes(p)) return;

    newList.unshift(p);
    setAllParticipants(newList);
  };

  const findPairs = () => {
    const keyNames = [...allParticipants];
    let valueNames = [...allParticipants];
    const newPairs = new Map<string, string>();
    let randomName: string = "";
    let randomIndex: number = 0;

    keyNames.forEach((keyName) => {
      do {
        randomIndex = getRandomInt(0, valueNames.length - 1);
        randomName = valueNames[randomIndex];
      } while (keyName == randomName);

      newPairs.set(keyName, randomName);
      valueNames = valueNames.filter((x) => x !== randomName);
    });

    setPairs(newPairs);
  };

  return (
    <div>
      {pairs.size == 0 && (
        <>
          <AddParticipants
            allParticipants={allParticipants}
            addNewP={onAddParticipant}
          />

          {/* Display participants */}
          {allParticipants.length !== 0 && (
            <DisplayParticipants
              allParticipants={allParticipants}
              onFindPairs={findPairs}
            />
          )}
        </>
      )}
      {/* Show result */}
      {pairs.size > 0 && <DisplayPairs pairs={pairs} />}
    </div>
  );
}

export default App;
