import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

const Terminal = () => {
  return (
    <main
      className="
        flex
        h-[min(78vh,760px)]
        w-[min(90vw,1200px)]
        flex-col
        overflow-hidden
        border
        border-terminal-border
        bg-terminal-gray-dark
        font-jetbrains-mono
        text-sm
        shadow-terminal
        rounded-md
      "
    >
      <TerminalHeader />
      <TerminalBody />
    </main>
  );
};

export default Terminal;