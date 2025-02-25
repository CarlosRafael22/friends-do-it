import { CreatePlanBody } from "@/src/entities/models/plan";
import { SupabasePlansAdapter } from "../../repositories/plansRepository";
import createPlan from "@/src/application/use-cases/plans/createPlan";

const createPlanController = async (plan: CreatePlanBody) => {
  const supabaseRepositoryAdapter = new SupabasePlansAdapter();
  const response = await createPlan(plan, supabaseRepositoryAdapter);
  return response;
};

export default createPlanController;