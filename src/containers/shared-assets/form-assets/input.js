import React from 'react';
import FormTooltips from './form-tooltips';

const Input = props =>{

  const {id, handleInputChange, hideTooltip, showTooltip, type, placeholder, value, pattern, label, tooltip} = props;

  return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}:</label>
          <input onChange={handleInputChange.bind(this)}
                 onBlur={hideTooltip}
                 onFocus={showTooltip}
                 type={type}
                 id={id}
                 placeholder={placeholder}
                 value={value}
                 pattern={pattern || ""} />
        <FormTooltips id={id}
                      label={label}
                      tooltip={tooltip}/>
      </div>
  )
};

export default Input;