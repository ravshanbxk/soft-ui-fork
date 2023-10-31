// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import PlaygroundData from "layouts/playground/data";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {useEffect, useState, useRef} from 'react';














import { useLocation, Link } from "react-router-dom";
// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

import SoftAvatar from "components/SoftAvatar";
// Soft UI Dashboard React examples
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import SoftInput from "components/SoftInput";
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </SoftBox>
        {isMini ? null : (
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SoftBox pr={1}>
              <SoftInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
              />
            </SoftBox>
            <SoftBox color={light ? "white" : "inherit"}>
              <Link to="/authentication/sign-in">
                <IconButton sx={navbarIconButton} size="small">
                  
                </IconButton>
              </Link>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon className={light ? "text-white" : "text-dark"}>notifications</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <SoftAvatar src={team2} size="sm" variant="rounded"/>
              </IconButton>
              
              {renderMenu()}
            </SoftBox>
          </SoftBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};
















function Assignee({assigneeKey}){
  Assignee.propTypes = {
    assigneeKey: PropTypes.number.isRequired,
  };

  return(
    <Grid item xs={4} lg={4}>
    <SoftBox pt={1} mb={0.5}>
      <SoftTypography variant="body2" color="text" fontWeight="medium">
        Assignee: {' '}
        <select className="form-select" aria-label="Default select example" id={'assignee-dropdown-' + assigneeKey} defaultValue={'Unassigned'}>
        <option value="0">Unassigned</option>
        <option value="1">John Doe</option>
        <option value="2">Peter Parker</option>
        <option value="3">Oscar Piastri</option>
      </select>
      </SoftTypography>
      </SoftBox>
    </Grid>
  );
}

function StatusDropdown({statusKey}){






  StatusDropdown.propTypes = {
    statusKey: PropTypes.number.isRequired,
  };


  
    return(
      <Grid item xs={4} lg={4}>
      <SoftBox pt={1} mb={0.5}>
        <SoftTypography variant="body2" color="text" fontWeight="medium">
          Status: {' '}
        <select className="form-select" aria-label="Default select example" id={'status-dropdown-' + statusKey} defaultValue={'To Do'}>
          <option value="0">In Progress</option>
          <option value="1">In Review</option>
          <option value="2">Done</option>
        </select>
        </SoftTypography>




        </SoftBox>
        </Grid>


    );
}

function ApprovalLabel({ show }) {
    const displayApproval = show ? (
        <SoftBadge variant="gradient" badgeContent="Approved by Security Dept" color="success" size="xs" container />
    ) : null;

    ApprovalLabel.propTypes = {
      show: PropTypes.bool.isRequired,
    };
  
    return(
      <Grid item xs={4} lg={4}>
        <SoftBox pt={1} mt={3}>
          {displayApproval}
        </SoftBox>
      </Grid>
    );
}

function OffCanvasLog(){
  return null;
}

function SaveResponseButton(){
  return null;
}

function StatusBar({ requirementKey, showGenerated }){
  StatusBar.propTypes = {
    requirementKey: PropTypes.number.isRequired,
    showGenerated: PropTypes.bool.isRequired,
  };


  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const light = false;

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );









    return (
      <div className="">
        <Grid container spacing={3}>
          <Assignee assigneeKey={requirementKey}/>
          <StatusDropdown statusKey={requirementKey}/>
          <ApprovalLabel show={showGenerated && requirementKey === 0 ? true : false} /> {/* <-- updated this line */}
          <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon className={light ? "text-white" : "text-dark"}>notifications</Icon>
              </IconButton>
              {renderMenu()}

          <OffCanvasLog/>
          <SaveResponseButton/>
        </Grid>
      </div>
    );
}

function QuestionCard({questionKey}){
  QuestionCard.propTypes = {
    questionKey: PropTypes.number.isRequired,
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
      <SoftBox pt={1} mb={1}>
      <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
      {PlaygroundData.questions[questionKey]}
      </SoftTypography>
      </SoftBox>
      </Grid>
    </Grid>
  );
}

function AnswerEditor({editorKey, showGen}){
  const [value, setValue] = useState('');

  useEffect(
    () => {
      const answer = PlaygroundData.answers[editorKey];
      if(showGen){
        setValue(answer);
        
      }
    },
    [showGen]
  );

  AnswerEditor.propTypes = {
    editorKey: PropTypes.number.isRequired,
    showGen: PropTypes.bool.isRequired
  };

  return(
    <div className="border my-2">
      <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Requirement response here...'/>
    </div>
  );
}

function Sources({sourceKey}){

  const [showSource, setShowSource] = useState(false);

  const toggleSource = () => {
    setShowSource((currentValue) => !currentValue);
  };

  Sources.propTypes = {
    sourceKey: PropTypes.number.isRequired
  };

  return (
    <SoftBox pt={1} mb={0.5}>
      <SoftButton variant="gradient" color="dark" onClick={toggleSource}>
          <Icon sx={{ fontWeight: "bold" }}>visibility</Icon>
          &nbsp;view Sources
      </SoftButton>
      <SoftBox pt={1} mb={0.5}>
      {showSource && <div className="content">{PlaygroundData.sources[sourceKey]}</div>}
      </SoftBox>
    </SoftBox>
  );
}

function Requirement({requirementKey, showGen, showSources}){
  Requirement.propTypes = {
    requirementKey: PropTypes.number.isRequired,
    showGen: PropTypes.bool.isRequired,
    showSources: PropTypes.bool.isRequired
  };

    return (
      <SoftBox mb={3}>
        <Card>
            <SoftBox p={3}>
                <StatusBar requirementKey={requirementKey} showGenerated={showGen} />
                <QuestionCard questionKey={requirementKey}/>
                <AnswerEditor editorKey={requirementKey} showGen={showGen}/>
                {showSources ? <Sources sourceKey={requirementKey}/> : null}
            </SoftBox>
        </Card>
      </SoftBox>      
    );
}



export default Requirement;