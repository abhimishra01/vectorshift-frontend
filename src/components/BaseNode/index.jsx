// BaseNode | Abstraction of Nodes

const BaseNode = ({ id, data, name, handlers }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default BaseNode;
