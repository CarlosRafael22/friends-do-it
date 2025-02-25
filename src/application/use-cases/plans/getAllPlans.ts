import PlansRepository from "../../interfaces/repositories/plansRepository.interface";

const getAllPlans = async (RepositoryAdapter: PlansRepository) => {
   const { data, error } = await RepositoryAdapter.getAllPlans();
   return { data, error };
}

export default getAllPlans;