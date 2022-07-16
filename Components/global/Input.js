import { ErrorMessage, Field, FieldArray, useField } from "formik";

const Input = (props) => {
  const { placeholder, as } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-control text-gray-500 relative font-body">
        <Field
          type="email"
          as={as}
          className={`font-body outline-none bg-white rounded-md px-2 py-3 text-sm 
          ${meta.touched && meta.error}`}
          {...field}
          {...props}
          autoComplete="off"
          placeholder={placeholder}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500 font-body capitalize text-sm"
        />
      </div>
    </>
  );
};

export { Input };
