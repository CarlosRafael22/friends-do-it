type Props = {
    percentage: number;
};

const ProgressCircle = ({ percentage }: Props) => (
    <svg className="w-12 h-12" viewBox="0 0 36 36">
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#E6E6E6"
        strokeWidth="3"
      />
      <path
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#4ADE80"
        strokeWidth="3"
        strokeDasharray={`${percentage}, 100`}
      />
      <text x="18" y="22" className="text-xs font-bold" textAnchor="middle" fill="#4ADE80">{percentage}%</text>
    </svg>
);

export default ProgressCircle;