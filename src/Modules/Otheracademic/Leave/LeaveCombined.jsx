import { useState } from "react";
import { Button } from "@mantine/core";
import LeaveForm from "../../../pages/Otheracademic/Leave/LeaveForm";
import LeaveStatus from "./LeaveStatus";

function LeaveCombined() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div
        style={{
          margin: "20px 0 0 40px",
          width: "300px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button variant="outline" onClick={() => setTab(0)}>
          Leave Form
        </Button>
        <Button variant="outline" onClick={() => setTab(1)}>
          Leave Status
        </Button>
      </div>
      {tab === 0 ? <LeaveForm /> : <LeaveStatus />}
    </>
  );
}

export default LeaveCombined;
