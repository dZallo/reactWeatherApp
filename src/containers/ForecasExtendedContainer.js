import React, { Component } from 'react';
import ForecasExtended from './../components/ForecastExtended'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class ForecasExtendedContainer extends Component {
    render() {
        const {city,forecastData} =this.props;
        return (
            city &&
            <ForecasExtended city={city} forecastData={forecastData}></ForecasExtended>
        );
    }
}

ForecasExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData:PropTypes.array.isRequired,
};
const mapStateToProps = ({city,cities})=>({city,forecastData: cities[city] && cities[city].forecastData});
export default connect(mapStateToProps,null) (ForecasExtendedContainer);