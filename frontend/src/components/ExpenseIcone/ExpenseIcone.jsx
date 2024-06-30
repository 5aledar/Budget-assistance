import "../ExpenseIcone/ExpenseIcone.css";
import { LuHeartPulse } from "react-icons/lu";
import { LiaCarSideSolid } from "react-icons/lia";
import { LuShirt } from "react-icons/lu";

export default function ExpenseIcon() {
  return (
    <div className="d-flex conten general-card">
      <div className="icon-container">
        <LuHeartPulse className="icon size-10" />
        <div>
        <p>Health expense</p>
        <p>20 %</p>
        </div>
        
      </div>
      <div className="icon-container">
        <LiaCarSideSolid className="icon size-10" />
        <div>
        <p>Health expense</p>
        <p>20 %</p>
        </div>
      </div>
      <div className="icon-container">
        <LuShirt className="icon size-10" />
        <div>
        <p>Health expense</p>
        <p>20 %</p>
        </div>
      </div>
    </div>
  );
}
