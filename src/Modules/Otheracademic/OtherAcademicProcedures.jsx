import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { useState, useRef } from "react";
import classes from "../Dashboard/Dashboard.module.css";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import LeaveCombined from "./Leave/LeaveCombined";
import GraduateStatus from "./Graduate_Seminar/graduate_status";

function OtherAcadProcedures() {
  const tabsListRef = useRef(null);
  const [activeTab, setActiveTab] = useState("0");
  const tabItems = [
    { title: "Bonafied" },
    { title: "Leave" },
    { title: "No dues" },
    { title: "Graduate Status" },
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
      {activeTab === "0" ? (
        <div>Put the bonafied component here</div>
      ) : activeTab === "1" ? (
        <div>
          <LeaveCombined />
        </div>
      ) : activeTab === "2" ? (
        <div>Put the no dues component here</div>
      ) : activeTab === "3" ? (
        <GraduateStatus />
      ) : null}
    </>
  );
}

export default OtherAcadProcedures;
