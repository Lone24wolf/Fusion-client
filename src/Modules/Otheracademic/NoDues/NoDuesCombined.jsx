import { useState } from "react";
import { Button } from "@mantine/core";

import NoDuesStatus from "./NoDuesStatus";
import NoduesForm from "./NoduesForm";
import Incharge from "./Incharge"; // Import the Incharge component

function NoDuesCombined() {
  const [tab, setTab] = useState(0); // 0: NoDues Form, 1: NoDues Status, 2: Lab Incharge

  return (
    <>
      <div
        style={{
          margin: "20px 0 0 40px",
          width: "400px", // Increased width to fit the new button
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant={tab === 0 ? "filled" : "outline"}
          onClick={() => setTab(0)}
        >
          NoDues Form
        </Button>
        <Button
          variant={tab === 1 ? "filled" : "outline"}
          onClick={() => setTab(1)}
        >
          NoDues Status
        </Button>
        <Button
          variant={tab === 2 ? "filled" : "outline"}
          onClick={() => setTab(2)}
        >
          Lab Incharge
        </Button>
      </div>

      {/* Conditional rendering based on the active tab */}
      {tab === 0 ? (
        <NoduesForm />
      ) : tab === 1 ? (
        <NoDuesStatus />
      ) : (
        <Incharge /> // Display Incharge component when tab is 2
      )}
    </>
  );
}

export default NoDuesCombined;
