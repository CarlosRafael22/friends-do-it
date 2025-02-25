import PlansRepository from "../../interfaces/repositories/plansRepository.interface";

const markPlanAsDone = async (planId: number, RepositoryAdapter: PlansRepository) => {
  const response = await RepositoryAdapter.markPlanAsDone(planId);
  return response;
};

export default markPlanAsDone;
