import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { useState, useRef } from "react";
import classes from "../Dashboard/Dashboard.module.css";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import LeaveCombined from "./Leave/LeaveCombined";
import GraduateStatus from "./Graduate_Seminar/graduate_status";

import TAForm from "./Assistantship/Supervisors/TA_supervisor"; // adjust the path accordingly
import BonafideCombined from "./Bonafide/BonafideCombined";
import NoDuesCombined from "./NoDues/NoDuesCombined";

function OtherAcadProcedures() {
  const tabsListRef = useRef(null);
  const [activeTab, setActiveTab] = useState("0");
  const tabItems = [
    { title: "Bonafide" },
    { title: "Leave" },
    { title: "No dues" },
    { title: "Graduate Status" },
    { title: "TA Supervisor" },
  ];

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(+activeTab + 1, tabItems.length - 1)
        : Math.max(+activeTab - 1, 0);
    setActiveTab(String(newIndex));
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CustomBreadcrumbs />
      <Flex justify="space-between" align="center" mt="lg">
        <Flex
          justify="flex-start"
          align="center"
          gap={{ base: "0.5rem", md: "1rem" }}
          mt={{ base: "1rem", md: "1.5rem" }}
          ml={{ md: "lg" }}
        >
          <Button
            onClick={() => handleTabChange("prev")}
            variant="default"
            p={0}
            style={{ border: "none" }}
          >
            <CaretCircleLeft
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>
          <div className={classes.fusionTabsContainer} ref={tabsListRef}>
            <Tabs value={activeTab} onChange={setActiveTab}>
              <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
                {tabItems.map((item, index) => (
                  <Tabs.Tab
                    value={`${index}`}
                    key={index}
                    className={
                      activeTab === `${index}`
                        ? classes.fusionActiveRecentTab
                        : ""
                    }
                  >
                    <Flex gap="4px">
                      <Text>{item.title}</Text>
                    </Flex>
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>
          </div>

          <Button
            onClick={() => handleTabChange("next")}
            variant="default"
            p={0}
            style={{ border: "none" }}
          >
            <CaretCircleRight
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>
        </Flex>
      </Flex>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {activeTab === "0" ? (
          <div>
            {" "}
            <BonafideCombined />
          </div>
        ) : activeTab === "1" ? (
          <div>
            <LeaveCombined />
          </div>
        ) : activeTab === "2" ? (
          <div>
            <NoDuesCombined />
          </div>
        ) : activeTab === "3" ? (
          <GraduateStatus />
        ) : activeTab === "4" ? (
          <TAForm />
        ) : null}
      </div>
    </>
  );
}

export default OtherAcadProcedures;
