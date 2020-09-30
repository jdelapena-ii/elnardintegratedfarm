import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function TextArea({
  label,
  name,
  required = true,
  rows = 4,
  register,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">
          {label}
          {required && ' *'}
        </span>
        <div className="relative mt-1 shadow-sm">
          <textarea
            id={name}
            name={name}
            rows={rows}
            required={required}
            placeholder="Message:"
            aria-invalid={!!errors[name]}
            ref={register({
              required: <Error message={`${label} is a required field`} />,
            })}
            className={`block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-textarea placeholder-uppercase ${
              errors[name]?.message ? 'border-burnt-orange' : ''
            }`}
          />
        </div>
      </label>
      {errors[name]?.message}
    </div>
  );
}

TextArea.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export { TextArea };
