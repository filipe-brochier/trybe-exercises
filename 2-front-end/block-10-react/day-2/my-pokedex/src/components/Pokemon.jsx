import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className="flex items-center m-2 p-2 rounded border-solid border-2 border-gray-300">
        <div>
          <p className="text-xs text-center">{ name }</p>
          <p className="text-xs text-center">{ type }</p>
          <p className="text-xs">
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img className="justify center" src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;