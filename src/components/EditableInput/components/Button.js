import React from 'react';

const Button = React.forwardRef(({ onClick, value, ...remainProps }, ref) => (
  <div>
    <input
      type="submit"
      onClick={onClick}
      value={value}
      ref={ref}
      {...remainProps}
    />
  </div>
));

// const Button = ({ onClick, value, innerRef}) => (
//   <div>
//     <input type="submit" onClick={onClick} value={value} ref={innerRef} />
//   </div>
// );

export default Button;
