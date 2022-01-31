const Map = ({ data, Component, ...props }) =>
  data.map((dataElement) => <Component {...props} />);

export default Map;
