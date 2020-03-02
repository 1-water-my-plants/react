import React from "react";
import { connect } from "react-redux";

import {getApi} from '../actions/';

const Plants = props => {

    const fetchApi = e => {
        e.preventDefault();
        props.getApi();
      };

    return (
        <div>
           {console.log(props.api, "props.api")}
           <h2>{props.api}</h2>
           <button onClick={fetchApi}>Fetch API!</button>
        </div>
    );
}

const mapStateToProps = state => ({
    api: state.api,
    error: state.error
  });

export default connect(
    mapStateToProps,
    { getApi }
  )(Plants);