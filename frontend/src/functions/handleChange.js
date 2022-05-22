// set new property for objects: register, login, forgotpass etc (forms in general)
export default function handleChange(setState, property, newProperty) {
  setState((prevState) => ({
    ...prevState,
    [property]: newProperty,
  }));
}
