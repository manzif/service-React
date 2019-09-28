import React from 'react';

const Users = (user) => {
    return (
    <div>
        <section id="post">
            <div className="container">
                    <div className="all1">
                            <article id="accounts-article">
                                <table id="accounts-table">
                                    <tr>
                                        <td colspan="7" className="header"><h2>Banka - All Accounts</h2></td>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Names</th>
                                        <th>Email</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                    </tr>
                                </table>
                            </article>
                        </div>
            </div>
        </section>
    </div>
);
}

export default Users
