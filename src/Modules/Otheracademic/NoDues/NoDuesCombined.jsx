import { useState } from "react";
import { Button } from "@mantine/core";

import NoDuesStatus from "./NoDuesStatus";
import NoduesForm from "./NoduesForm";
import Incharge from "./Incharge";

function NoDuesCombined() {
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
          Incharge
        </Button>
      </div>
      {tab === 0 ? <NoduesForm /> : tab === 1 ? <NoDuesStatus /> : <Incharge />}
    </>
  );
}

export default NoDuesCombined;
