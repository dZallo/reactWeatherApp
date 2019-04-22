import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>

        );
    }

    handleSelectionLocation = city => {
        //Se añade la ciudad seleccionada a la constante city
        //this.setState({ city: city });
        //console.log("handleSelectionLocation App " + city);
        //En props está el store
        this.props.setCity(city);

    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});
export default connect(null, mapDispatchToProps)(LocationListContainer);