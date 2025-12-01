import { useState } from "react";
import "../App.css";

interface IDisplayParticipants {
  allParticipants: string[];

  addNewP: (newList: string) => void;
}

export default function AddParticipants(props: IDisplayParticipants) {
  const [participantToAdd, setParticipantToAdd] = useState<string>("");

  const onAddParticipant = () => {
    props.addNewP(participantToAdd);
    setParticipantToAdd("");
  };

  return (
    <>
      {/* Input */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "25px" }}>
        <input
          value={participantToAdd}
          placeholder="Teilnehmer"
          onChange={(ev) => setParticipantToAdd(ev.currentTarget.value.trim())}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onAddParticipant();
            }
          }}
        />
        <button onClick={onAddParticipant}>Hinzufügen</button>
      </div>
    </>
  );
}
