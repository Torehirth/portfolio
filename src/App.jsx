// import Example from "@/components/Example.jsx";
import Example from "./components/Example.jsx";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-4 bg-green-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to my portfolio built with React, Tailwind CSS and Vite!
        </h1>
      </div>
      <Example />
    </>
  );
};
export default App;
