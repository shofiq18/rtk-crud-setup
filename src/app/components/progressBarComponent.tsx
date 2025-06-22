import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progressValue = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const stepLabels = [
    { number: "01", title: "Personal", subtitle: "Information" },
    { number: "02", title: "Career", subtitle: "summary" },
    { number: "03", title: "Skills", subtitle: "& Experience" },
    { number: "04", title: "Education", subtitle: "& Certifications" },
    { number: "05", title: "Contact", subtitle: "Information" },
    { number: "06", title: "AI", subtitle: "Resume Generation" },
    { number: "07", title: "Review", subtitle: "& Download" },
  ];

  return (
    <div className="">
      {/* Progress bar with circles */}
      <div className="relative h-20">
        {/* Progress bar as connector line */}
        <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 z-0">
          <Progress value={progressValue} className="h-full bg-gray-200" />
        </div>

        {/* Circles container - using grid for perfect alignment */}
        <div className="relative grid grid-cols-7 z-10 h-full">
          {stepLabels.slice(0, totalSteps).map((step, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div
                key={stepNum}
                className="flex flex-col items-center justify-start"
              >
                {/* Circle number */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 bg-white relative"
                  style={{
                    backgroundColor:
                      isCurrent || isCompleted ? "#10B981" : "white",
                    borderColor:
                      isCurrent || isCompleted ? "#10B981" : "#D1D5DB",
                    color: isCurrent || isCompleted ? "white" : "#4B5563",
                    transform: "translateY(50%)",
                  }}
                >
                  {step.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Labels container - using same grid layout */}
      <div className="grid grid-cols-7">
        {stepLabels.slice(0, totalSteps).map((step, index) => {
          const stepNum = index + 1;
          const isCurrent = stepNum === currentStep;
          const isCompleted = stepNum < currentStep;

          return (
            <div key={stepNum} className="flex flex-col items-center px-2">
              <span
                className={`text-sm text-center ${
                  isCurrent
                    ? "text-gray-900 font-medium"
                    : isCompleted
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
              <span
                className={`text-xs text-center ${
                  isCurrent
                    ? "text-gray-900 font-medium"
                    : isCompleted
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                {step.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
