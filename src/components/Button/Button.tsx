import React from 'react';
import propTypes, { InferProps } from 'prop-types';

const ButtonPropTypes = {
  message: propTypes.string
}

const ButtonComponent = (props: InferProps<typeof ButtonPropTypes>) => (
  <div>
    <span>{props.message}</span>
  </div>
);
ButtonComponent.propTypes = ButtonPropTypes;
ButtonComponent.defaultProps = { message: '' }

export default ButtonComponent;