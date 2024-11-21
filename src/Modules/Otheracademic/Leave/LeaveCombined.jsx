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
          margin: "20px auto",
          width: "300px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant={tab === 0 ? "filled" : "outline"}
          onClick={() => setTab(0)}
        >
          Leave Form
        </Button>
        <Button
          variant={tab === 1 ? "filled" : "outline"}
          onClick={() => setTab(1)}
        >
          Leave Status
        </Button>
        {/* <Button
          variant={tab === 2 ? "filled" : "outline"}
          onClick={() => setTab(2)}
        >
          Approve
        </Button> */}
      </div>

      {tab === 0 ? (
        <div
          style={{
            margin: "45px 60px 0 60px",
            backgroundColor: "#f0f2f5",
            borderRadius: "20px",
          }}
        >
          <LeaveForm />
        </div>
      ) : (
        <LeaveStatus />
      )}
    </>
  );
}

export default LeaveCombined;
