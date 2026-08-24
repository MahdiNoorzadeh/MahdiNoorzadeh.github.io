import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TerminalPromptProps {
  children?: ReactNode;
  username: string;
}

const TerminalPrompt: FC<TerminalPromptProps> = ({ children, username }) => {
  const isRoot = username === "root";

  const usernameColor = isRoot
    ? "text-terminal-red"
    : "text-terminal-green";

  return (
    <div className="relative flex w-full flex-col">
      <div
        className={twMerge(
          "ml-5 select-none font-semibold tracking-tight",
          "before:absolute before:left-0.5 before:top-1/4",
          "before:h-[2px] before:w-5 before:-translate-y-[2px]",
          "after:absolute after:left-0.5 after:h-1/2",
          "after:w-[2px] after:translate-y-1/2",
          isRoot && "before:bg-terminal-red after:bg-terminal-red",
          !isRoot && "before:bg-terminal-green after:bg-terminal-green"
        )}
      >
        <span className={usernameColor}>
          {username}
        </span>

        <span className="text-terminal-gray">@terminal</span>

        <span className="text-terminal-gray">:</span>

        <span className="text-terminal-gray">~</span>
      </div>

      <div
        className={twMerge(
          "before:absolute before:left-0.5 before:top-[75%]",
          "before:h-[2px] before:w-3 before:-translate-y-[2px]",
          "ml-3 flex items-center gap-0 leading-6",
          isRoot && "before:bg-terminal-red",
          !isRoot && "before:bg-terminal-green"
        )}
      >
        <span
          className={twMerge(
            "ml-0.5 select-none font-semibold",
            usernameColor
          )}
        >
          {isRoot ? "#" : "$"}
        </span>

        <div className="relative w-full pl-2 text-sm leading-6 text-terminal-gray">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalPrompt;