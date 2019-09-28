import React, {Component} from 'react';
import HeaderAdmin from '../components/common/HeaderAdmin';
import Footer from '../components/common/Footer';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions/usersAction';
import PropTypes from 'prop-types';

class Admin extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }
    render(){
        console.log(this.props.users)
        return (
            <div>
                <HeaderAdmin />
                    <section id="post">
                        <div className="container">
                                <div className="all1">
                                        <article id="accounts-article">
                                            <table id="accounts-table">
                                                <tr>
                                                    <td colspan="6" className="header"><h2>Banka - All Accounts</h2></td>
                                                </tr>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Names</th>
                                                    <th>Email</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                </tr>
                                                {this.props.users.map(user => (
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.fullname}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.createdAt}</td>
                                                    <td>{user.updatedAt}</td>
                                                </tr>
                                                ))}
                                            </table>
                                        </article>
                                    </div>
                        </div>
                    </section>
                <Footer />
            </div>
        );
    }  
}

Admin.PropTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.users
  });
export default connect (mapStateToProps, { fetchUsers })(Admin);