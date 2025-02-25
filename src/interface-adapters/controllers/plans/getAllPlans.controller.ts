import getAllPlans from "@/src/application/use-cases/plans/getAllPlans";
import { SupabasePlansAdapter } from "../../repositories/plansRepository";
import { type Plan, type PlanData } from "@/models/plan";

const plansPresenter = (data: PlanData[]): Plan[] => {
  return data.map(plan => {
    const { id, marked_done_at, planned_for, title } = plan;

    const date = new Date(planned_for);
    const dtf = new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "long" });
    const dateString = dtf.format(date).slice(0, dtf.format(date).lastIndexOf(':'))

    return {
      id,
      name: title,
      date: `${dateString}h`,
      isDone: !!marked_done_at,
      users: []
    }
  })
};

const getAllPlansController = async () => {
    const supabaseRepositoryAdapter = new SupabasePlansAdapter();
    const { data } = await getAllPlans(supabaseRepositoryAdapter);
    // if (error) return { message: 'Could not retrieve plans data' } as GenericError;
    const plansConvertedToUi = plansPresenter(data as PlanData[]);
    return plansConvertedToUi;
};

export default getAllPlansController;