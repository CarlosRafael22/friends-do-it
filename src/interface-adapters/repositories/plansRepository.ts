import { createClient } from "@/utils/supabase/server";
import { CreatePlanBody, PlanData } from "@/src/entities/models/plan";
import { QueryError } from "@supabase/supabase-js";
import { type PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { type PlansRepository } from "@/src/application/interfaces/repositories/plansRepository.interface";
import { type QueryResponse } from "@/src/application/interfaces/repositories";
import { SuccessfulResponse } from "@/src/entities/models/request";
import { type GenericError } from "@/src/entities/models/error";

type SupabaseQueryResponse<DataType> = QueryResponse<DataType, QueryError>;
export type PlansSupabaseQueryResponse = SupabaseQueryResponse<PlanData>;

export class SupabasePlansAdapter implements PlansRepository<PlanData, QueryError> {
    async getAllPlans(): Promise<PlansSupabaseQueryResponse> {
        const supabase = await createClient();
        const getPlansQuery: PostgrestFilterBuilder<any, any, PlanData[], 'plans'> = supabase.from('plans')
            .select().order('marked_done_at', { ascending: false }).order('planned_for', { ascending: false });
        return await getPlansQuery;
    };

    async createPlan(plan: CreatePlanBody): Promise<SuccessfulResponse | GenericError> {
        const supabase = await createClient();
        const { title, date, time } = plan;

        const plannedFor = date && time ? `${date} ${time}` : null;

        const { status, statusText } = await supabase
        .from('plans')
        .insert({ title, planned_for: plannedFor });

        if (status === 201 && statusText === 'Created') return { success: true };
        return { message: 'Could not create plan.' }; 
    };

    async markPlanAsDone(planId: number): Promise<SuccessfulResponse | GenericError> {
        const supabase = await createClient();
        const dateTime = new Date().toISOString();
        const { status, statusText } =  await supabase
            .from('plans')
            .update({ marked_done_at: dateTime })
            .eq('id', planId);
        if (status === 201 && statusText === 'Created') return { success: true };
        return { message: 'Could not create plan.' }; 
    }
};

export class MockedPlansAdapter implements PlansRepository {
    async getAllPlans<PlanData, SimpleError>(): Promise<QueryResponse<PlanData, SimpleError>> {
        // Simulated Supabase query logic
        const getPlansQuery: Promise<QueryResponse<PlanData, SimpleError>> = new Promise((resolve) => {
            const data = [{
            id: 'string;',
            title: 'string;',
            created_at: 'string;',
            marked_done_at: 'string;',
            planned_for: 'string;',
            }] as PlanData[];
            resolve({
                data,
                error: {
                    message: 'error'
                } as SimpleError
            });
        });
        return await getPlansQuery;
    };

    async createPlan(plan: CreatePlanBody): Promise<SuccessfulResponse | GenericError> {
        return new Promise(resolve => resolve({ success: true }));
    };

    async markPlanAsDone(planId: number): Promise<SuccessfulResponse | GenericError> {
        return new Promise(resolve => resolve({ success: true }));
    };
};