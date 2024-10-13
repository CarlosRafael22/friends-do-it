
type Props = 
  | { progress: number; total: number; progressArray?: never }
  | { progressArray: (boolean | undefined)[]; progress?: never; total?: never };

const createStatusArray = (progress: number, total: number) => Array.from({ length: total }, (_, idx) => idx < progress ? true : undefined);

const ProgressScore = ({ progress, total, progressArray }: Props) => {
    const statusArray = progressArray || createStatusArray(progress, total)
    const getStatusColor = (isDone?: boolean) => {
        if (isDone === undefined) return 'bg-gray-200';
        return isDone ? 'bg-green-400' : 'bg-red-500';
    };

    return (
        <div className="flex mt-2 space-x-1">
            {statusArray.map((status, i) => (
            <div
                key={i}
                className={`w-6 h-6 rounded ${getStatusColor(status)}`}
            ></div>
            ))}
        </div>
    );
};

export default ProgressScore;