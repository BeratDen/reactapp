import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../../context";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Test",
      isVisible: false,
    };
  }

  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
  };

  onClickEvent = (number, e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;
    console.log(id);
    dispatch({ type: "DELETE_USER", payload: id });
    await axios.delete("http://localhost:3001/users/" + id);
  };
  render() {
    // Destructing
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={isVisible ? { borderColor: "#00c04b" } : null}
              >
                <div
                  className="card-header d-flex justify-content-between"
                  style={isVisible ? { borderColor: "#00c04b" } : null}
                >
                  <h4
                    className="d-inline"
                    onClick={this.onClickEvent.bind(this, 34)}
                    style={{ cursor: "pointer" }}
                  >
                    {name}
                  </h4>
                  <i
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Maaş : {salary}</p>
                    <p className="card-text">Departman : {department}</p>
                    <p>{this.state.test}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};
export default User;
