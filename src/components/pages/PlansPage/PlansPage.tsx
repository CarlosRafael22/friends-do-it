import { type Plan } from "@/models/plan";
import PlanCard from "@/molecules/PlanCard/PlanCard";

type Props = {
    plans: Plan[];
}

const PlansPage = ({ plans }: Props) => {
    return (
      <div className="min-h-screen bg-gray-100 p-8 w-full">
        <div className="max-w-md mx-auto space-y-4">
          {plans.map((plan, index) => (
            <PlanCard {...plan} key={index} />
          ))}
        </div>
      </div>
    );
};

export default PlansPage;