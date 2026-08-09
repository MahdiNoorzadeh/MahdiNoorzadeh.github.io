import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

const Terminal = () => {
  return (
    <main className="flex h-full w-[min(100%,_60rem)] cursor-default flex-col overflow-hidden border border-terminal-border bg-terminal-gray-dark/[.96] font-fira-code text-sm shadow-terminal sm:rounded-md md:aspect-[3/2] md:h-auto">
      <TerminalHeader />
      <TerminalBody />
    </main>
  );
};

export default Terminal;
