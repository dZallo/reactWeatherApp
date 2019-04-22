import React, { Component } from 'react';
import ForecasExtended from './../components/ForecastExtended'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class ForecasExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecasExtended city={this.props.city}></ForecasExtended>
        );
    }
}

ForecasExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};
const mapStateToProps = state=>({city:state.city})
export default connect(mapStateToProps,null) (ForecasExtendedContainer);