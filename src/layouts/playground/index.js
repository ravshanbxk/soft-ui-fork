import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

import Requirement from "./components/Requirement";
import PlaygroundData from "layouts/playground/data";

import {useState, useEffect} from 'react';

function Playground(){
    const [showGenerated, setShowGenerated] = useState(false);
    const [showSources, setShowSources] = useState(false);
    function fillResponses() {
        console.log('clicked');
        setShowGenerated(true);
        setShowSources(true);  // Add this line
        
    }

    const requirementsComponents = PlaygroundData.questions.map(
        (question, index) => (<Requirement key={index} requirementKey={index} showGen={showGenerated} showSources={showSources} />)  // Update here
    );

    return (
        <DashboardLayout>
            <DashboardNavbar />

            <SoftBox pt={1} mb={2}>
                <SoftButton onClick={fillResponses} variant="gradient" color="info" fullWidth>
                    <Icon sx={{ fontWeight: "bold" }}>editnote</Icon>
                    &nbsp; generate answers
                </SoftButton>
            </SoftBox>

            {/* <Requirement requirementKey={0} showGen={true} showSources={true} /> */}
            {requirementsComponents}
        </DashboardLayout>
    );
}

export default Playground;