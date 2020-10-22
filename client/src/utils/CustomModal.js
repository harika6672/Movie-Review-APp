import React from "react";
import { Link } from "react-router-dom";
import "../css/modal.css";
const CustomModal = (props) => {
 

  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">
            <h5>Please Sign In..</h5>
            <button type="button" id="btnStyling" onClick={()=>window.location.reload()}>
            <Link
  to={{
    pathname: "/ways/signin",
    state: { fromModal: true, id:props.id }
  }}
>Sign In</Link>
            </button>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;
