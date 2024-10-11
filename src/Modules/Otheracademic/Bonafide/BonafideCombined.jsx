import { useState } from "react";
import { Button } from "@mantine/core";
import BonafideForm from "./Bonafideform";
import BonafideFormStatus from "./BonafideFormStatus";

function BonafideCombined() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div
        style={{
          margin: "20px 0 0 40px",
          width: "350px",
          display: "flex",
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
      {tab === 0 ? <BonafideForm /> : <BonafideFormStatus />}
    </>
  );
}

export default BonafideCombined;
