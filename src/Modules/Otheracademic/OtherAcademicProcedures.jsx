import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { Tabs, Button, Flex, Text } from "@mantine/core";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "../Dashboard/Dashboard.module.css";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import LeaveCombined from "./Leave/LeaveCombined";
import GraduateStatus from "./Graduate_Seminar/graduate_status"; // Adjusted to PascalCase
import TAform from "./Assistantship/Supervisors/TA_supervisorCombined"; // Adjusted name to PascalCase
import BonafideCombined from "./Bonafide/BonafideCombined";
import NoDuesCombined from "./NoDues/NoDuesCombined";
import ApproveLeave from "./Leave/ApproveLeave";
import AdminBonafideRequests from "./Bonafide/AdminBonafideRequests";
import ApproveLeaveTA from "./Leave/ApproveLeaveTA";
import ApproveLeaveThesis from "./Leave/ApproveLeaveThesis";

function OtherAcadProcedures() {
  const tabsListRef = useRef(null);
  const [activeTab, setActiveTab] = useState("0");
  const role = useSelector((state) => state.user.role);
  const username = useSelector((state) => state.user.username);
  console.log(username, role);

  const allTabItems = [
    { title: "Bonafide", component: <BonafideCombined /> },
    { title: "Leave", component: <LeaveCombined /> },
    { title: "No dues", component: <NoDuesCombined /> },
    { title: "Graduate Status", component: <GraduateStatus /> },
    { title: "TA Supervisor", component: <TAform /> },
    { title: "Leave Requests HOD", component: <ApproveLeave /> },
    { title: "Bonafide Request", component: <AdminBonafideRequests /> },
    { title: "Leave TA", component: <ApproveLeaveTA /> },
    { title: "Leave Thesis", component: <ApproveLeaveThesis /> },
  ];
  let filteredTabItems = [];
  if (role === "student") {
    filteredTabItems = allTabItems.filter((_, index) =>
      [0, 1, 2].includes(index),
    );
  } else if (role === "acadadmin") {
    filteredTabItems = allTabItems.filter((_, index) => [3, 6].includes(index));
  } else filteredTabItems = allTabItems;

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(+activeTab + 1, filteredTabItems.length - 1)
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
                {filteredTabItems.map((item, index) => (
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
        {filteredTabItems[+activeTab]?.component}
      </div>
    </>
  );
}

export default OtherAcadProcedures;
