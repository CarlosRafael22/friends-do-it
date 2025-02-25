import { CreatePlanBody } from "@/src/entities/models/plan"
import PlansRepository from "../../interfaces/repositories/plansRepository.interface"

const createPlan = async (plan: CreatePlanBody, RepositoryAdapter: PlansRepository) => {
  const response = await RepositoryAdapter.createPlan(plan);
  return response;
};

export default createPlan;
