import { useState } from "react";
import { Button } from "@mantine/core";
import BonafideForm from "./Bonafideform";
import BonafideFormStatus from "./BonafideFormStatus";

function BonafideCombined() {
  const [tab, setTab] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Arrange buttons and content vertically
        alignItems: "center", // Center horizontally
        paddingTop: "20px", // Add padding at the top to push buttons down slightly
        height: "100vh", // Full viewport height
      }}
    >
      {/* Buttons aligned to the top of the page */}
      <div
        style={{
          marginBottom: "20px", // Space between buttons and the form
          width: "350px", // Set width of the button container
          display: "flex", // Use flex to align buttons horizontally
          justifyContent: "space-between",
        }}
      >
        <Button
          variant={tab === 0 ? "filled" : "outline"}
          onClick={() => setTab(0)}
          style={{ marginRight: "10px", flexGrow: 1 }}
        >
          Bonafide Form
        </Button>
        <Button
          variant={tab === 1 ? "filled" : "outline"}
          onClick={() => setTab(1)}
          style={{ flexGrow: 1 }}
        >
          Bonafide Form Status
        </Button>
      </div>

      {/* Conditionally render the form or status below the buttons */}
      <div style={{ width: "100%", maxWidth: "700px" }}>
        {tab === 0 ? <BonafideForm /> : <BonafideFormStatus />}
      </div>
    </div>
  );
}

export default BonafideCombined;
