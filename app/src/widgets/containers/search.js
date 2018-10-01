import React, { Component } from 'react';
import Search from '../components/search';
import  * as actions from '../../../redux/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi',
    prompt: false
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.searchAsyncEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value,
      prompt: !!(event.target.value.length),
    })
  }

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        prompt={this.state.prompt}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(SearchContainer);