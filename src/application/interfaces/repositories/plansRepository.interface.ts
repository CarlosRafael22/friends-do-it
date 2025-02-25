import { SuccessfulResponse } from "@/src/entities/models/request";
import { QueryResponse } from ".";
import { type GenericError } from "@/src/entities/models/error";
import { CreatePlanBody } from "@/src/entities/models/plan";

export interface PlansRepository<DataType = any, ErrorType = any> {
  getAllPlans(): Promise<QueryResponse<DataType, ErrorType>>;
  createPlan(plan: CreatePlanBody): Promise<SuccessfulResponse | GenericError>;
  markPlanAsDone(planId: number): Promise<SuccessfulResponse | GenericError>;
};



export default PlansRepository;