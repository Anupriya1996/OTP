import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ReactModal from "react-modal";
import "./App.css";
class Otp extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      disable: true,
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ modal: true });
  }

  close() {
    this.setState({ modal: false });
  }

  change(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  submit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  next = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <div>
        <div >
          <button onClick={this.open}>Please click here</button>
        </div>
        <ReactModal isOpen={this.state.modal} ariaHideApp={false}>
          <button onClick={this.close}>X</button>

          <div className="Content">
            <form onSubmit={this.submit}>
              <div className="otpContainer">
                <input
                  name="otp1"
                  type="number"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp1}
                  onKeyPress={this.keyPressed}
                  onChange={(e) => this.change("otp1", e)}
                  tabIndex="1"
                  maxLength="1"
                  onKeyUp={(e) => this.next(e)}
                />
                <input
                  name="otp2"
                  type="number"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp2}
                  onChange={(e) => this.change("otp2", e)}
                  tabIndex="2"
                  maxLength="1"
                  onKeyUp={(e) => this.next(e)}
                />
                <input
                  name="otp3"
                  type="number"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp3}
                  onChange={(e) => this.change("otp3", e)}
                  tabIndex="3"
                  maxLength="1"
                  onKeyUp={(e) => this.next(e)}
                />
                <input
                  name="otp4"
                  type="number"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp4}
                  onChange={(e) => this.change("otp4", e)}
                  tabIndex="4"
                  maxLength="1"
                  onKeyUp={(e) => this.next(e)}
                />

                <input
                  name="otp5"
                  type="number"
                  autoComplete="off"
                  className="otpInput"
                  value={this.state.otp5}
                  onChange={(e) => this.change("otp5", e)}
                  tabIndex="5"
                  maxLength="1"
                  onKeyUp={(e) => this.next(e)}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Otp;