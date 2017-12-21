import * as React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'patternfly-react';
import { Project } from '../../models/project';

const CreateProjectForm = props => {
  const nameTooltip = (
    <Tooltip id="tooltip">
      <div>A project name for Github.</div>
    </Tooltip>
  );
  const descriptionTooltip = (
    <Tooltip id="tooltip">
      <div>A project description for Github.</div>
    </Tooltip>
  );
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">
          Project Name
          <OverlayTrigger
            overlay={nameTooltip}
            placement="top"
            trigger="hover focus"
            rootClose
          >
            <span
              id="project_name_icon"
              className="pficon pficon-info form-pficon-info"
            />
          </OverlayTrigger>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          value={props.value.name}
          onChange={(e: any) => {
            props.handleChange(e, 'name');
          }}
        />
      </div>
      <div className="form-group">
        <label id="projectDescriptionLabel" htmlFor="exampleInputDescription">
          Project Description
          <OverlayTrigger
            overlay={descriptionTooltip}
            placement="top"
            trigger="hover focus"
            rootClose
          >
            <span
              id="project_name_icon"
              className="pficon pficon-info form-pficon-info"
            />
          </OverlayTrigger>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputDescription"
          value={props.value.description}
          onChange={(e: any) => {
            props.handleChange(e, 'description');
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" />
        <p className="help-block">Example block-level help text here.</p>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" />Check me out
        </label>
      </div>
      <button
        id="cancelProjectButton"
        type="submit"
        className="btn btn-default"
        onClick={(e: any) => {
          props.handleSubmit(e);
        }}
      >
        Cancel
      </button>
      &nbsp;&nbsp;
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e: any) => {
          props.handleSubmit(e);
        }}
      >
        Submit
      </button>
    </form>
  );
};
CreateProjectForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: Project
};

export default CreateProjectForm;
