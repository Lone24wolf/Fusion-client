import { useState } from "react";
import { Button } from "@mantine/core";
import NoDuesStatus from "./NoDuesStatus";
import NoduesForm from "../../../pages/Otheracademic/NoDues/NoduesForm";

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
        <Button variant="outline" onClick={() => setTab(0)}>
          Nodues Form
        </Button>
        <Button variant="outline" onClick={() => setTab(1)}>
          Nodues Status
        </Button>
      </div>
      {tab === 0 ? <NoduesForm /> : <NoDuesStatus />}
    </>
  );
}

export default NoDuesCombined;
