import React from "react";

// Input
export const Input = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  onKeyPress,
  onPaste,
  disabled,
  value,
  handleBlur,
  style,
  border,
  ...props
}) => (
  <div className="input-group w-full">
    <label
      htmlFor={name}
      className={`sm:text-base text-sm capitalize ${
        disabled ? "text-gray-500" : "text-gray-800 dark:text-gray-200 "
      } font-medium text-left`}
      style={style}
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onPaste={onPaste}
      onKeyPress={onKeyPress}
      value={value}
      onBlur={handleBlur}
      className={`form-input py-1 px-2 sm:px-4 w-full h-12 text-left text-md rounded bg-gray-100  dark:bg-dark-700 focus:shadow-none
        focus:outline-none border-4  border-primary-900 ${
          disabled ? "text-gray-500" : "text-gray-800 dark:text-gray-100"
        } focus:shadow-xl hover:border-primary-900 mt-3
        appearance-none bg-gray-100 focus:bg-white placeholder-opacity-75 ${border}`}
      style={style}
      disabled={disabled}
      {...props}
    />
  </div>
);

// Password-Input
export const PasswordInput = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  handleBlur,
  required,
  ...props
}) => {
  const [show, setShow] = React.useState(true);
  const togglePasswordVisiblity = () => {
    setShow(!show);
  };
  return (
    <div className="input-group w-full z-0">
      <label
        htmlFor={name}
        className="sm:text-base text-sm text-gray-800 dark:text-gray-200 capitalize font-medium text-left"
      >
        {label}
      </label>
      <div className="relative text-center">
        <input
          required={required}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={handleBlur}
          {...props}
          className="form-input py-2 px-4 w-full h-12 text-left text-md dark:bg-dark-700
            rounded hover:shadow-none focus:outline-none focus:border-primary-900 border-4  border-primary-900
            focus:shadow-none hover:border-primary-900 mt-3 bg-gray-100 focus:bg-white dark:text-gray-100"
          type={show ? "password" : "text"}
        />
        <div className="absolute inset-y-0 right-0 pr-3 grid items-center text-sm leading-5">
          <button
            type="button"
            onClick={togglePasswordVisiblity}
            className="focus:outline-none text-base text-gray-600 dark:text-primary-900 grid grid-cols-1 items-center mt-2"
          >
            <i className={`fa fa-${show ? "eye-slash" : "eye"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

// // Checkbox
// export const Checkbox = ({ onChange, name, label, props, checked }) => (
//   <label htmlFor={name} className="checkbox-input-group input-group text-sm sm:text-base cursor-pointer">
//     <input
//       onChange={onChange}
//       type="checkbox"
//       name={name}
//       id={name}
//       checked={!!checked}
//       className="focus:outline-none pappy-block"
//       {...props}
//     />
//     <span>{label}</span>
//   </label>
// );

// // Radio
// export const Radio = ({ onChange, name, label, checked, style, value, readOnly }) => (
//   <label className="flex flex-row space-x-4 items-center cursor-pointer">
//     <input
//       readOnly={readOnly}
//       onChange={onChange}
//       type="radio"
//       name={name}
//       value={value}
//       className="form-radio order-1 focus:outline-none border-primary-700 cursor-pointer"
//       checked={checked}
//       style={style}
//     />
//     <span className="order-2 text-sm sm:text-base">{label}</span>
//   </label>
// );

// // AutoSelect - Bank
// export const AutoSelect = ({ choices, label, name, onChange, defaultValue, chosen, className, style, disabled }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="pb-3 text-gray-800 sm:text-base font-medium text-sm" style={style}>
//       {label}
//     </label>
//     <select id={name} onChange={onChange} name={name} className={className} disabled={disabled}>
//       <option className="text-gray-400 placeholder-opacity-50" value={defaultValue} disabled>
//         {defaultValue}
//       </option>
//       {choices.map((choice, index) => (
//         <option key={`bank-${index}`} selected={choice.toLowerCase() === chosen?.toLowerCase()}>
//           {choice}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// // Select
// export const Select = ({ choices, label, name, onChange, defaultValue, className, style, disabled, value }) => {
//   const currentValue = value || defaultValue;
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={name} className="pb-3 text-gray-800 sm:text-base font-medium text-sm" style={style}>
//         {label}
//       </label>
//       <select id={name} onChange={onChange} name={name} className={className} disabled={disabled} value={currentValue}>
//         <option className="text-gray-400 placeholder-opacity-50" value={defaultValue} disabled>
//           {defaultValue}
//         </option>
//         {choices.map((choice, index) => (
//           <option key={index} value={choice}>
//             {choice}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// Textarea
export const TextArea = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  handleBlur,
  style,
}) => (
  <div className="input-group flex flex-col pappy-block">
    <label
      htmlFor={name}
      className="sm:text-base text-sm text-gray-800 dark:text-gray-200 capitalize font-medium text-left pappy-block"
    >
      {label}
    </label>
    <textarea
      rows="6"
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={handleBlur}
      className="form-textarea py-2 px-4 w-full resize-none text-left text-md rounded
        hover:shadow-none focus:outline-none bg-gray-100 focus:bg-white dark:text-gray-100 dark:bg-dark-700
        border-4  border-primary-900 mt-3 placeholder-opacity-75 pappy-block"
      style={style}
    />
  </div>
);
