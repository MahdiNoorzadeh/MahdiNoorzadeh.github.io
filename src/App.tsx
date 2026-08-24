import Terminal from "./components/terminal/Terminal";
import UsernameContextProvider from "./context/UsernameContext";

const App = () => {
  return (
    <UsernameContextProvider>
      <main className="terminal-page">
        <Terminal />
      </main>
    </UsernameContextProvider>
  );
};

export default App;