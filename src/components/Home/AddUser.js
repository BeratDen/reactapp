import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../../context";

var uniqid = require("uniqid");

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    department: "",
    salary: "",
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.department]: e.target.value,
      [e.target.salary]: e.target.value,
    });
  };
  addUser = async (dispatch, e) => {
    e.preventDefault();

    let { name, department, salary } = this.state;

    const newUser = {
      id: uniqid(),
      name,
      department,
      salary,
    };
    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });
    await axios.post("http://localhost:3001/users/", newUser);
    this.setState({
      name: "",
      department: "",
      salary: "",
    });
  };

  render() {
    const { visible, name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h4>Kullanıcı Ekle</h4>
                  <button
                    onClick={this.changeVisibility}
                    className="btn btn-primary btn-sm mb-2"
                  >
                    {visible ? (
                      <i className="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-down"></i>
                    )}
                  </button>
                </div>
                <Animation pose={visible ? "visible" : "hidden"}>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">İsim</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="İsim Giriniz"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Departman</label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          className="form-control"
                          placeholder="Departman Giriniz"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Maaş</label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          className="form-control"
                          placeholder="Maaş Giriniz"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success my-4 float-end"
                      >
                        Kaydet
                      </button>
                    </form>
                  </div>
                </Animation>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
