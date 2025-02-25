import { SupabasePlansAdapter } from "../../repositories/plansRepository";
import markPlanAsDone from "@/src/application/use-cases/plans/markPlanAsDone";

const markPlanAsDoneController = async (planId: number) => {
  const supabaseRepositoryAdapter = new SupabasePlansAdapter();
  const response = await markPlanAsDone(planId, supabaseRepositoryAdapter);
  return response;
};

export default markPlanAsDoneController;