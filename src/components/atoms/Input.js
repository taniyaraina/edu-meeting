const Input = ({ className, error, ...props }) => {
  return (
    <div>
      <div className="control">
        <input
          className={`input ${className}`}
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
