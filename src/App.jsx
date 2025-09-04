import ClockList from "./components/ClockList";
import LocalClock from "./components/LocalClock";
import useClock from "./hooks/useClock";

const App = () => {
  useClock(new Date());
  return (
    <div>
        <LocalClock />
        <ClockList />
    </div>
  )
}
export default App;
