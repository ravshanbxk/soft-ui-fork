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

    return (
      <div className="">
        <Grid container spacing={3}>
          <Assignee assigneeKey={requirementKey}/>
          <StatusDropdown statusKey={requirementKey}/>
          <ApprovalLabel show={showGenerated && requirementKey === 0 ? true : false} /> {/* <-- updated this line */}
          
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