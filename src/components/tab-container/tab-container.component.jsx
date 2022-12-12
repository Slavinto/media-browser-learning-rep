import Tab from "../tab/tab.component.jsx";
import "./tab-container.styles.css";
import { testData } from "../../data/data.js";

const TabContainer = () => {
  // todo:
  // insert a react router link instead of tab.url
  return (
    <div className="tab-container">
      {testData.map((tab) => {
        return (
          <div key={tab.id} className="tab">
            <a href={tab.url}>**{tab.id}**</a>
          </div>
        );
      })}
    </div>
  );
};

export default TabContainer;
