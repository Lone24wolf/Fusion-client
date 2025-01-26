import { useState } from "react";
import { Button } from "@mantine/core";
import LeaveFormPG from "./LeaveFormPG";
import LeavePGstatus from "./LeavePGstatus";

function LeavePGCombined() {
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
          <LeaveFormPG setTab={setTab} />
        </div>
      ) : (
        <LeavePGstatus />
      )}
    </>
  );
}

export default LeavePGCombined;
