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

  displayDetail(category, val){
    return(
      <h5 style={{margin:'5px'}}>
        <div className="text-info">
          {category}
        </div>
        {val}
      </h5>
    );
  }

  render(){
    const {user} = this.props;
    if(!user){
      return <h3>"Loading..."</h3>
    }

    return(
      <div> <h2> <span className="text-info" style={{margin:'5px'}}> User Detail: </span> <span className="text-primary"> <strong> {user.firstName} {user.lastName} </strong></span> </h2>
        {this.displayDetail("Username    :", user.userName)}
        {this.displayDetail("E-mail      :", user.email)}
        {this.displayDetail("Address     :", user.address)}
        {this.displayDetail("Description :", user.description)}
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
