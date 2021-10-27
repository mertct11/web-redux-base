import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const OwnModalComponent = ({ isVisible, isSuccess, description, status }) => {
  let modalRef = useRef();
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.showLoading) {
      modalRef.current.click();
    }
    console.log({ state });
  }, [state]);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={modalRef}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className={`modal-header alert alert-${status}`}>
              <h5 className="modal-title" id="exampleModalLabel">
                İşlem {isSuccess ? "başarılı" : "hatalı"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{description}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Tamam
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnModalComponent;
