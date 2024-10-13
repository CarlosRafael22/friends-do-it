import Hero from "@/src/components/hero";
import ConnectSupabaseSteps from "@/src/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/src/components/tutorial/sign-up-user-steps";
import GroupPage from "@/src/components/pages/GroupPage/GroupPage";
import GoalCard from "@/src/components/molecules/GoalCard/GoalCard";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      {/* <Hero /> */}
      <GroupPage />
{/*       <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <ActivitiesList /> : <ConnectSupabaseSteps />}
      </main> */}
    </>
  );
}
