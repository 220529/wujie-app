import WujieReact from "wujie-react";
import lifecycles from "@/utils/lifecycle.js";
import iframeConfig from "@/utils/iframeConfig.js";
import { useNavigate } from "react-router";

export default () => {
  const navigate = useNavigate();
  function jump(location) {
    navigate(location.path);
  }
  return (
    <div>
      <span>react: v19.0.0</span>
      <div>
        <WujieReact
          {...iframeConfig["react19"]}
          {...lifecycles}
          props={{ jump }}
        />
      </div>
    </div>
  );
};
