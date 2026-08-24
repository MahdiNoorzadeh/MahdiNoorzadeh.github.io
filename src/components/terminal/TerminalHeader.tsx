import { FC } from "react";
import { BsTerminal } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useUsernameContext } from "../../context/UsernameContext";

interface TerminalHeaderProps {}

const TerminalHeader: FC<TerminalHeaderProps> = () => {
  const { username } = useUsernameContext();

  return (
    <header className="terminal-header">
      <div className="terminal-header-left">
        <BsTerminal className="terminal-header-icon" />
        <span className="terminal-header-label">terminal</span>
      </div>

      <div className="terminal-header-title">
        <span className="terminal-header-user">{username}</span>
        <span className="terminal-header-muted">@terminal:~</span>
      </div>

      <div className="terminal-header-controls">
        <span className="terminal-window-control" />
        <span className="terminal-window-control" />

        <button
          aria-label="Close terminal"
          type="button"
          className="terminal-window-control terminal-window-close"
        >
          <GrFormClose />
        </button>
      </div>
    </header>
  );
};

export default TerminalHeader;