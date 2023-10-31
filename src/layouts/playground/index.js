import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

import Requirement from "./components/Requirement";
import PlaygroundData from "layouts/playground/data";

import {useState, useEffect} from 'react';

import Table from "examples/Tables/Table";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Playground(){
    const [showGenerated, setShowGenerated] = useState(false);
    const [showSources, setShowSources] = useState(false);
    const { columns: prCols, rows: prRows } = projectsTableData;

    function fillResponses() {
        setShowGenerated(true);
        setShowSources(true);
        
    }

    const requirementsComponents = PlaygroundData.questions.map(
        (question, index) => (<Requirement key={index} requirementKey={index} showGen={showGenerated} showSources={showSources} />)  // Update here
    );

    // State to keep track of the selected project and view mode (table or details)
  const [showTable, setShowTable] = useState(true);

if (showTable) {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SoftTypography variant="h6">Projects table</SoftTypography>
        </SoftBox>
        <SoftBox
          sx={{
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              },
            },
          }}
        >
          {/* Add a click handler to the table rows */}
          <Table onClickFunc={()=>{setShowTable(false);}} columns={prCols} rows={prRows} />
        </SoftBox>
      </Card>
      <SoftBox pt={1} mb={2}>
          <SoftButton variant="gradient" color="info" fullWidth>
              <Icon sx={{ fontWeight: "bold" }}>add</Icon>
              &nbsp; Add Project
          </SoftButton>
      </SoftBox>
      {/* Adding the button here */}
      {/* <button onClick={() => setShowTable(false)}>Show Other View</button> */}
    </DashboardLayout>
  );
} 
  else {

    return (
        <DashboardLayout>
            <DashboardNavbar />

            <SoftBox pt={1} mb={2}>
                <SoftButton variant="gradient" color="dark" fullWidth>
                    <Icon sx={{ fontWeight: "bold" }}>upload</Icon>
                    &nbsp; Export
                </SoftButton>
            </SoftBox>
            <SoftBox pt={1} mb={2}>
                <SoftButton onClick={fillResponses} variant="gradient" color="info" fullWidth>
                    <Icon sx={{ fontWeight: "bold" }}>editnote</Icon>
                    &nbsp; generate answers
                </SoftButton>
            </SoftBox>
            
            {requirementsComponents}
        </DashboardLayout>
    );
}}

export default Playground;