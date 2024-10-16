import { useState } from "react";
import { Button } from "@mantine/core";

import NoDuesStatus from "./NoDuesStatus";
import NoduesForm from "./NoduesForm";
// import NoDuesStatus from "./NoDuesStatus";

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
      </div>
      {tab === 0 ? <NoduesForm /> : <NoDuesStatus />}
    </>
  );
}

export default NoDuesCombined;
