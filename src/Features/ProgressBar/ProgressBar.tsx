export interface ProgressBarProps {
  total: number;
  current: number;
}

function ProgressBar({ total, current }: ProgressBarProps) {
  return (
    <div
      className="progress rounded-0"
      role="progressbar"
      style={{ height: "2%" }}
    >
      <div
        className="progress-bar"
        style={{
          width: isNaN(total) ? 0 : (current / total) * 100 + "%",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
