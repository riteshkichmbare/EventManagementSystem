function Input({ label, value, onChange, type = "text", placeholder = "" }) {
  return (
    <label className="form-group">
      <span>{label}</span>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </label>
  );
}

export default Input;
