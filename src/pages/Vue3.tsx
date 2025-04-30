import WujieReact from "wujie-react";
import lifecycles from "@/utils/lifecycle.js";
import iframeConfig from "@/utils/iframeConfig.js";
import { useNavigate } from "react-router";

export default () => {
  const navigate = useNavigate();
  function jump(location) {
    console.log("jump to", location);
    navigate(location);
  }
  return (
    <div>
      <span>vue: v3.5.10</span>
      <div>
        <WujieReact
          {...iframeConfig["vue3"]}
          props={{ jump }}
          {...lifecycles}
        />
      </div>
    </div>
  );
};
