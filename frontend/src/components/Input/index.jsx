import { useFormContext } from "react-hook-form";

// import { findInputErrors } from "../../utils/ValidationUtils/findInputErrors";
// import { isFormInvalid } from "../../utils/ValidationUtils/isFormInvalid";
// import "../../pages/style.scss";

export const Input = ({
  className,
  profileClassName,
  label,
  type,
  value,
  id,
  row,
  placeholder,
  validation,
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

//   const inputError = findInputErrors(errors, id);
//   const isInvalid = isFormInvalid(inputError);

  return (
    <div className="d-flex flex-column">
      <div className={className}>
        <label htmlFor={id}>
          <p className="d-inline-block">{label}</p>{" "}
          <p className="text-danger d-inline-block">*</p>
        </label>
      </div>
      <input
        id={id}
        row={row}
        type={type}
        value={value}
        className={profileClassName}
        placeholder={placeholder}
        disabled={disabled}
        {...register(id, validation)}
      />
      {isInvalid ? (
        <p className="text-danger mt-1 fs-6"> {inputError.error.message}</p>
      ) : (
        <div className="">&nbsp;</div>
      )}
    </div>
  );
};
