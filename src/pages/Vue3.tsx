import WujieReact from "wujie-react";

export default () => (
  <div>
    <span>vue-v3 - Sub Application</span>
    <div>
      <WujieReact name="vue-v3" sync={true} url="http://localhost:5100" />
    </div>
  </div>
);
