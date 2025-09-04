import ClockList from "./components/ClockList";
import LocalClock from "./components/LocalClock";
import useClock from "./hooks/useClock";

const App = () => {
  const { clock: local } = useClock();
  const { clock: est } = useClock("EST");
  const { clock: pst } = useClock("PST");
  const { clock: pak } = useClock("UTC", 5 * 60);
  const { clock: edt } = useClock("EDT");
  const { clock: bst } = useClock("BST");

  console.log("local", local.date);
  console.log("est", est.date);
  console.log("pst", pst.date);
  console.log("pak", pak.date);
  console.log("edt", edt.date);
  console.log("bst", bst.date);

  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
};

export default App;
