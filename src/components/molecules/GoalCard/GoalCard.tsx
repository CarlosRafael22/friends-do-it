import { type Goal } from "@/models/goal";
import UserIcon from "@/atoms/Icon/UserIcon";
import ProgressCircle from "@/atoms/ProgressCircle/ProgressCircle";
import ProgressScore from "../ProgressScore/ProgressScore";

type GoalCardProps = Goal;

const GoalCard = ({ name, progress, total, user }: GoalCardProps) => {
    const percentage = Math.floor((progress/total)*100);
  
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between max-w-96">
        <div className="flex items-center space-x-4 max-w-80">
          {user && <UserIcon />}
          <div>
            <h2 className="font-semibold">{name}</h2>
            <ProgressScore progress={progress} total={total} />
          </div>
        </div>
        <ProgressCircle percentage={percentage} />
      </div>
    )
  };

export default GoalCard;