import * as React from "react";
import style from './form-input.module.scss';

const FormInput = (props) => {
  const {value, formik, isActive, placeholder, label} = props;
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={value}>
        {label} {formik.touched[value] && formik.errors[value] ? (
          <span className={style.error}>({formik.errors[value]})</span>
        ) : null}
      </label>
      <input
        className={[style.input, formik.touched[value] && formik.errors[value] ? style[`input--invalid`] : null].join(' ')}
        placeholder={placeholder}
        id={value}
        name={value}
        type={`text`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[value]}
        readOnly={!isActive}
      />
    </div>
  );
};

export default FormInput;
