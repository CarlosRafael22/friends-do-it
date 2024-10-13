import { Plan } from "@/models/plan";
import UserIcon from "@/atoms/Icon/UserIcon";
import CalendarIcon from "@/atoms/Icon/CalendarIcon";

type PlanCardProps = Plan & {
    onClickHandler?: () => void
}

const PlanCard = ({ name, date, isDone, users, onClickHandler }: PlanCardProps) => {
    
    return (
    <div className="bg-white rounded-lg shadow-sm mb-4 p-4 flex items-center justify-between max-w-96">
      <div className="max-w-80">
        <h2 className="text-lg font-semibold">{name}</h2>
        {date && (
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <CalendarIcon />
            <span>{date}</span>
          </div>
        )}
        <div className="flex mt-2 space-x-1">
            {users && users.map((_, i) => (
              <UserIcon key={i} />
            ))}
          </div>
      </div>
      <button
        onClick={onClickHandler}
        className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center focus:outline-none transition-colors duration-200 ${
          isDone ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
        }`}
        aria-label={isDone ? "Uncheck activity" : "Check activity"}
      >
        {isDone && (
          <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default PlanCard;