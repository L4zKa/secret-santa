import { useState } from "react";
import "./App.css";

function App() {
  const [allParticipants, setAllParticipants] = useState<string[]>([]);
  const [participantToAdd, setParticipantToAdd] = useState<string>("");

  const onAddParticipant = () => {
    const newList: string[] = [...allParticipants, participantToAdd];
    setAllParticipants(newList);
    setParticipantToAdd("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", gap: "5px", marginBottom: "25px" }}>
        <input
          value={participantToAdd}
          placeholder="Teilnehmer"
          onChange={(ev) => setParticipantToAdd(ev.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              onAddParticipant();
            }
          }}
        />
        <button onClick={onAddParticipant}>Hinzufügen</button>
      </div>

      {allParticipants.length != 0 && (
        <>
          <label>Teilnehmer:</label>
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              gap: "5px",
            }}
          >
            {allParticipants.sort().map((p) => (
              <label key={p} className="participantLabel">
                {p}
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
