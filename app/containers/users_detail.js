import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { fetchUserWithId, deleteUser} from '../actions/index';
import { connect } from 'react-redux';
class UsersDetail extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchUserWithId(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deleteUser(this.props.params.id)
      .then(() => {
        this.context.router.push("/users");
      });
  }

  render(){
    const {user} = this.props;
    if(!user){
      return <h3>"Loading..."</h3>
    }
    return(
      <div> <h2> <span className="text-info"> User Detail: </span> <span className="text-primary"> <strong> {user.firstName} {user.lastName} </strong></span> </h2>
        <h5> <span className="text-info"> Username    : </span><br/>{user.userName} </h5>
        <h5> <span className="text-info"> E-mail      : </span><br/>{user.email} </h5>
        <h5> <span className="text-info"> Address     : </span><br/>{user.address} </h5>
        <h5> <span className="text-info"> Description : </span><br/>{user.description} </h5>
        <Link to="/users" className="btn btn-primary">
          Back to Index
        </Link>
        <button className = "btn btn-danger" onClick={this.onDeleteClick.bind(this)}>
          Delete User
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user : state.users.user
  };
}

export default connect(mapStateToProps, {fetchUserWithId, deleteUser})(UsersDetail);
