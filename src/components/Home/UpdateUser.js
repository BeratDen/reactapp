import React, { Component } from "react";
import {
  useParams,
  redirect,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "../Header";
import UserConsumer from "../../context";
import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    department: "",
    salary: "",
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.department]: e.target.value,
      [e.target.salary]: e.target.value,
    });
  };

  componentDidMount = async () => {
    const { id } = this.props.params;

    const response = await axios.get(`http://localhost:3001/users/${id}`);

    const { name, salary, department } = response.data;

    this.setState({
      name,
      salary,
      department,
    });
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();

    const { id } = this.props.params;

    const { name, department, salary } = this.state;

    const updatedUser = {
      name,
      department,
      salary,
    };

    const response = await axios.put(
      `http://localhost:3001/users/${id}`,
      updatedUser
    );

    dispatch({
      type: "UPDATE_USER",
      payload: response.data,
    });

    //Redirect
    const navigation = this.props.navigation;
    navigation("/");
  };

  render() {
    const { name, department, salary } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <Header></Header>
              <div className="container">
                <div className="col-md-8 mb-4">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h4>Kullanıcı Düzenle</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <WrappedComponent
      {...props}
      params={params}
      navigation={navigation}
      location={location}
    />
  );
};

export default withRouter(UpdateUser);
