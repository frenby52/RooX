import * as React from "react";
import {useFormik} from 'formik';
import FormInput from "../../form-input/form-input";
import history from "../../../history";
import {AppRoute} from "../../../const";
import SortPanel from "../../sort-panel/sort-panel";
import Loader from "../../loader/loader";
import style from './user-profile.module.scss';

const FormInputs = [
  {value: `name`, label: `Name`, placeholder: `Иван Иванов`},
  {value: `username`, label: `User name`, placeholder: `Ivan`},
  {value: `email`, label: `E-mail`, placeholder: `example@mail.com`},
  {value: `street`, label: `Street`, placeholder: `ул. Пример`},
  {value: `city`, label: `City`, placeholder: `Москва`},
  {value: `zipcode`, label: `Zip code`, placeholder: `1234234`},
  {value: `phone`, label: `Phone`, placeholder: `89991112233`},
  {value: `website`, label: `Website`, placeholder: `www.example.com`}
];

const UserProfile = (props) => {
  const {user, isActive, onIsActiveChange, onSortButtonClick} = props;

  if (!user) {
    return <Loader />;
  }

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = `Required`;
    } else if (values.name.length < 3) {
      errors.name = `Must be at least 3 characters`;
    }

    if (!values.username) {
      errors.username = `Required`;
    } else if (values.username.length < 3) {
      errors.username = `Must be at least 3 characters`;
    }

    if (!values.email) {
      errors.email = `Required`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = `Invalid email address`;
    }

    if (!values.street) {
      errors.street = `Required`;
    } else if (values.street.length < 3) {
      errors.street = `Must be at least 3 characters`;
    }

    if (!values.city) {
      errors.city = `Required`;
    } else if (values.city.length < 3) {
      errors.city = `Must be at least 3 characters`;
    }

    if (!values.zipcode) {
      errors.zipcode = `Required`;
    } else if (values.zipcode.length < 3) {
      errors.zipcode = `Must be at least 3 characters`;
    }

    if (!values.phone) {
      errors.phone = `Required`;
    } else if (values.phone.length < 3) {
      errors.phone = `Must be at least 3 characters`;
    }

    if (!values.website) {
      errors.website = `Required`;
    } else if (values.website.length < 3) {
      errors.website = `Must be at least 3 characters`;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      street: user.street,
      city: user.city,
      zipcode: user.zipcode,
      phone: user.phone,
      website: user.website,
      comment: ``,
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      onIsActiveChange(false);
      history.push(AppRoute.ROOT);
    },
  });

  return (
    <div className={style.wrapper}>
      <SortPanel onSortButtonClick={onSortButtonClick} />
      <div className={style[`userprofile-wrapper`]}>
        <div className={style[`title-wrapper`]}>
          <h2 className={style.title}>Профиль пользователя</h2>
          <button className={style.btn} type="button" name="edit" onClick={()=> onIsActiveChange(true)}>Редактировать</button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={style[`form-wrapper`]} >
            {FormInputs.map((input, i) => <FormInput value={input.value} formik={formik} isActive={isActive} label={input.label} placeholder={input.placeholder} key={input.value + i}/>)}
            <label className={style.label} htmlFor={`comment`}>Comment</label>
            <textarea className={style.textarea} name="comment" id="comment" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comment} readOnly={!isActive}/>
          </div>
          <div className={style.controls}>
            <button className={[style.btn, style[`submit-btn`]].join(' ')} type="submit" name="submit" disabled={!isActive}>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
