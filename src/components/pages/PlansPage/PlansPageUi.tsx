"use client"
import { useEffect, useState } from "react";
import { useFormState } from 'react-dom';
import { useRouter } from "next/navigation";

import { type Plan } from "@/models/plan";
import PlanCard from "@/molecules/PlanCard/PlanCard";
import PlusIcon from "@/atoms/Icon/PlusIcon";
import CreatePlanModal from "../../molecules/CreatePlanModal/CreatePlanModal";
import { createPlanActionFormState, markPlanAsDoneActionFormState, type ServerActionState } from "@/app/actions";

type Props = {
    plans: Plan[];
}

const initialState: ServerActionState = {
  error: '',
}

const PlansPageUi = ({ plans }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPlanActionState, createPlanAction] = useFormState(createPlanActionFormState, initialState);
  const [markPlanAsDoneActionState, markPlanAsDoneAction] = useFormState(markPlanAsDoneActionFormState, initialState)
  const router = useRouter();

  const handleClose = () => {
    if (!createPlanActionState.error) {
        setIsModalOpen(false);
        router.refresh();
    }
  };

  useEffect(() => {
    if (!createPlanActionState.error) {
        handleClose();
    }
  }, [createPlanActionState]);

useEffect(() => {
    if (!markPlanAsDoneActionState.error) {
        router.refresh();
    }
  }, [markPlanAsDoneActionState]);

  const markPlanAsDoneHandler = async (id: string) => {
    await markPlanAsDoneAction(+id);
  }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 w-full">
            {markPlanAsDoneActionState.error && <p>{markPlanAsDoneActionState.error}</p>}
        <div className="mb-4">
            <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center max-w-max"
            >
            <PlusIcon />
            Add Plan
            </button>
        </div>

        {isModalOpen && (
            <CreatePlanModal
              onSubmit={createPlanAction}
              onClose={handleClose}
              errorMessage={createPlanActionState.error}
              />
        )}
        
        <div className="max-w-md mx-auto space-y-4">
            {plans.map((plan, index) => (
                <PlanCard {...plan} key={index} onClickHandler={markPlanAsDoneHandler} />
            ))}
        </div>
        </div>
    );
};

export default PlansPageUi;