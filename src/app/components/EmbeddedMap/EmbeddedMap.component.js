import React from 'react';
import {
  MAP_SRC,
  MAP_WIDTH,
  MAP_HEIGHT
} from './EmbeddedMap.config';
import './EmbeddedMap.style.scss';

class EmbeddedMapComponent extends React.Component {
  render() {
    return (
      <div className="EmbeddedMap-Component">
        <iframe
          title="EmbeddedMapComponent"
          src={MAP_SRC}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
        />
      </div>
    );
  }
}

export default EmbeddedMapComponent;
