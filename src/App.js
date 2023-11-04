import "./App.css";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector} from "react-redux";
import { fetchData } from "./actions/action";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const {tickets} = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  },[dispatch]);

  return tickets ? (
    <div>
      <NavBar />
      <DashBoard />
    </div>
  ) : (
    console.error("Something went wrong")
  );
};

export default App;