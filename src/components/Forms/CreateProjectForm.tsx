import * as React from 'react';
import { Tooltip } from 'react-patternfly-shims';
import { Project } from '../../models/project';

interface Props {
  handleSubmit: Function;
  handleChange: Function;
  value: Project;
}

export const CreateProjectForm: React.StatelessComponent<Props> = props => {
  return (
    <form role="form">
      <div className="form-group">
        <label htmlFor="exampleInputName">
          Project Name
          <span
            id="project_name_icon"
            className="pficon pficon-info form-pficon-info"
          />
          <Tooltip placement="top" targetSelector="#project_name_icon">
            A project name for Github.
          </Tooltip>
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
          <span
            id="project_description_icon"
            className="pficon pficon-info form-pficon-info"
          />
          <Tooltip placement="top" targetSelector="#project_description_icon">
            A project description for Github.
          </Tooltip>
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

export default CreateProjectForm;
