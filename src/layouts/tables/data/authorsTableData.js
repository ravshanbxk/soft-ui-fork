/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "name", align: "center" },
    { name: "author", align: "left" },
    { name: "category", align: "left" },

    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@cogniflow.org" />,
      category: <Function job="Manager" org="Organization" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">CogniFlow Proposals</SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@cogniflow.org" />,
      category: <Function job="Security" org="InfoSec" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">InfoSec Knowledge</SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@cogniflow.org" />,
      category: <Function job="EU market" org="Compliance" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">Product EU Compliance</SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@cogniflow.org" />,
      category: <Function job="Quality Assurance" org="Docs" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">Certifications </SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@cogniflow.org" />,
      category: <Function job="Legal" org="Docs" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">Legals</SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@cogniflow.org" />,
      category: <Function job="PM" org="Features" />,
      name: (<SoftTypography variant="button" color="black" fontWeight="bold">Product Roadmap</SoftTypography>),
      employed: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },


  ],
};

export default authorsTableData;
