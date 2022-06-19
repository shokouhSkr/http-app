import Discussion from "./container/Discussion/Discussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container h-screen max-w-screen-lg bg-zinc-100 p-6">
      <ToastContainer />
      <Discussion />
    </div>
  );
};

export default App;
