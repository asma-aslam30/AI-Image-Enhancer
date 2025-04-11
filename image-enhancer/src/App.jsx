import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 min-h-screen px-4 py-8">
     
     
     <div className="text-center mb-8">
      <h1 className="text-5xl font-bold text-grey-800 mb-4">AI Image Ehancer</h1>
      <p className="text-lg text-grey-500">Powered by @asma aslam</p>
     </div>



      <Home />
      <div className="text-sm text-grey-500 mt-8">
        Upload your Image and let Ai enhance to in seconds
      </div>
    </div>
  );
}

export default App;
