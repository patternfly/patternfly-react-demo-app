import * as React from 'react';
import { Tooltip } from 'react-patternfly-shims';
import { Stage } from '../../models/stage';

interface Props {
  handleSubmit: Function;
  handleChange: Function;
  value: Stage;
}

export const CreateStageForm: React.StatelessComponent<Props> = props => {
  return (
    <form role="form">
      <div className="form-group">
        <label htmlFor="exampleInputName">
          Stage Name
          <span
            id="stage_name_icon"
            className="pficon pficon-info form-pficon-info"
          />
          <Tooltip placement="top" targetSelector="#stage_name_icon">
            A stage name tooltip.
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
          Stage Description
          <span
            id="stage_description_icon"
            className="pficon pficon-info form-pficon-info"
          />
          <Tooltip placement="top" targetSelector="#stage_description_icon">
            A stage description tooltip.
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

export default CreateStageForm;
