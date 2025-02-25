export type Plan = {
    id: string;
    name: string;
    date?: string;
    isDone: boolean;
};

export type CreatePlanBody = {
  title: string;
  date?: string;
  time?: string;
};

export type PlanData = {
    id: string;
    title: string;
    created_at: string;
    marked_done_at: string;
    planned_for: string;
}