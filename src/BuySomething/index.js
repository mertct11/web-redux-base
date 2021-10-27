import { useDispatch } from "react-redux";
import { showLoadingAct } from "../actions";
const BuySomething = () => {
  const dispatch = useDispatch();

  const buyHandleClick = () => {
    dispatch(showLoadingAct());
  };

  return (
    <>
      <button
        onClick={() => {
          buyHandleClick();
        }}
        className="button button-primary"
      >
        BUY
      </button>
    </>
  );
};

export default BuySomething;
