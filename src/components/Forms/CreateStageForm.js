import * as React from 'react';
import PropTypes from 'prop-types';
import { Stage } from '../../models/stage';

const CreateStageForm = props => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">Stage Name</label>
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

CreateStageForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: Stage
};

export default CreateStageForm;
