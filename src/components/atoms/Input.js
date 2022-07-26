const Input = ({ className, error, ...props }) => {
  return (
    <div>
      <div className="control">
        <input
          className={`input pl-5 py-5 ${className}`}
          type=""
          placeholder=""
          {...props}
        />
      </div>
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

export default Input;
