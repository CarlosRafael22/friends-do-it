import { type Plan } from "@/models/plan";
import { getPlansAction } from "@/app/actions";
import PlansPageUi from "./PlansPageUi";

const PlansPage = async () => {
  const plans: Plan[] = await getPlansAction();

    return (
      <PlansPageUi
        plans={plans}
      />
    );
};

export default PlansPage;