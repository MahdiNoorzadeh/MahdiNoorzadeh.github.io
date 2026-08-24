import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";

const Terminal = () => {
  return (
    <main className="terminal-window relative flex h-full w-[min(100%,_75rem)] cursor-default flex-col overflow-hidden border border-terminal-border bg-terminal-gray-dark font-fira-code text-sm shadow-terminal sm:rounded-md md:aspect-[3/2] md:h-auto">
      <div className="terminal-artwork" aria-hidden="true" />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <TerminalHeader />
        <TerminalBody />
      </div>
    </main>
  );
};

export default Terminal;