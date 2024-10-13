import { type Goal } from "@/models/goal";
import GoalCard from "@/molecules/GoalCard/GoalCard";

type Props = {
    goals: Goal[];
}

const GoalsPage = ({ goals }: Props) => {
    return (
      <div className="min-h-screen bg-gray-100 p-8 w-full">
        <div className="max-w-md mx-auto space-y-4">
          {goals.map((goal, index) => (
            <GoalCard {...goal} key={index} />
          ))}
        </div>
      </div>
    );
};

export default GoalsPage;