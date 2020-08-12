import React, { Component } from 'react';

class UserTable extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        var index=1;
        const tableRows=this.props.users.map(user=>(<tr><td>{index++}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.phone}</td></tr>))
        return (
          <React.Fragment>
            <h4 className='mt-5'>Users</h4>
            <table>
              <tr>
                <th>No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone Number</th>
              </tr>
              {
                tableRows
              }
            </table>
          </React.Fragment>
        );
      }
    }
export default UserTable;