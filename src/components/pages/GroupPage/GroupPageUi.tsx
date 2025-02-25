import PlansPage from "../PlansPage/PlansPage";
import UserIcon from "@/atoms/Icon/UserIcon";


const GroupPageUi = () => {
  return (
    <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Munich bunch</h1>
        <div className="flex justify-center mb-6 space-x-2">
            {[...Array(6)].map((_, i) => (
            <UserIcon key={i} />
            ))}
        </div>
        <PlansPage />
    </div>
  );
};

export default GroupPageUi;
