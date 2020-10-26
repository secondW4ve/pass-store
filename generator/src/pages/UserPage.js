import React from 'react';
import { connect } from 'react-redux';

import './UserPage.css';

function UserPage(props) {

  const passwordsTest = [
    {
      app: 'Instagram',
      login: 'secondW4ve',
      password: '1234',
    },
    {
      app: 'Telegram',
      login: 'noiseW4ve',
      password: 'yolo',
    },
    {
      app: 'Firefox',
      login: 'jura@gmail.com',
      password: 'aga',
    }
  ]


  return (
    <div className = "user-page-container">
      <table className = "table-container">
        <thead>
          <tr>
            <th>App</th>
            <th>Login</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {passwordsTest.map(record => (
            <tr>
              <td>{record.app}</td>
              <td>{record.login}</td>
              <td>{record.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  }
}

export default connect(mapStateToProps)(UserPage);