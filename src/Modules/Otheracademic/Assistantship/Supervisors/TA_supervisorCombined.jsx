import { useState } from "react";
import { Button } from "@mantine/core";
import AssistantshipForm from "./TA_supervisor";
import AssistantshipStatus from "./TA_supervisorStatus";

function AssistantshipCombined() {
  const [tab, setTab] = useState(0);

  return (
    <>
      {/* Buttons Container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center", // Center buttons horizontally
          position: "relative",
          top: "20px", // Push buttons closer to the top
          marginBottom: "10px", // Reduce space between buttons and content below
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          {" "}
          {/* Reduced button gap */}
          <Button
            variant={tab === 0 ? "filled" : "outline"}
            onClick={() => setTab(0)}
          >
            Assistantship Form
          </Button>
          <Button
            variant={tab === 1 ? "filled" : "outline"}
            onClick={() => setTab(1)}
          >
            Assistantship Status
          </Button>
        </div>
      </div>

      {/* Render Content Based on Tab */}
      <div
        style={{
          marginTop: "40px", // Adjust spacing below buttons
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {tab === 0 ? <AssistantshipForm /> : <AssistantshipStatus />}
      </div>
    </>
  );
}

export default AssistantshipCombined;
