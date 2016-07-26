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
        this.context.router.push("/");
      });
  }

  render(){
    const {user} = this.props;
    if(!user){
      return <h3>"Loading..."</h3>
    }
    return(
      <div> <h1>User Detail {this.props.params.id}</h1>
        <Link to="/" className="btn btn-primary">
          Back to Index
        </Link>
        <h3>  Profile of {user.userName} </h3>
        <h4>  {user.firstName} {user.lastName} </h4>
        <h5>  E-mail      : {user.email} </h5>
        <h5>  Address     : {user.address} </h5>
        <h5>  Description : {user.description} </h5>

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
