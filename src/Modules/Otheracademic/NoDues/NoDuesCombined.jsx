import { useState } from "react";
import { Button, Flex } from "@mantine/core";

import NoDuesStatus from "./NoDuesStatus";
import NoduesForm from "./NoduesForm";
import Incharge from "./Incharge";

function NoDuesCombined() {
  const [tab, setTab] = useState(0);

  return (
    <>
      {/* Buttons Container */}
      <div
        style={{
          margin: "20px 0", // Top and bottom margin
          width: "100%", // Full width for centering
          display: "flex",
          justifyContent: "center", // Center the buttons horizontally
        }}
      >
        <Flex gap={8}>
          {" "}
          {/* Adjusted gap between buttons */}
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
        </Flex>
      </div>

      {/* Render Content Based on Tab */}
      {tab === 0 ? <NoduesForm /> : tab === 1 ? <NoDuesStatus /> : <Incharge />}
    </>
  );
}

export default NoDuesCombined;
