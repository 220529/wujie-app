import WujieReact from "wujie-react";

export default () => {
  return (
    <div>
      <span>react-v19 - Sub Application</span>
      <div>
        <WujieReact name="react-v19" sync={true} url="http://localhost:5000" />
      </div>
    </div>
  );
};
