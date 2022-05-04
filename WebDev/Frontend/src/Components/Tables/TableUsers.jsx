import React from "react";

const TableUsers = (props) => {
  return (
      props.users.map((val, idx)=> {
          return (
              <tr >
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].user_id} {props.users[idx].lastName}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].name} {props.users[idx].lastName}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].email}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].user_name}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].dob}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].country}</a></td>
                  <td><a href={"/User/"+props.users[idx].user_id} className="dark-text"> {props.users[idx].user_type}</a></td>
              </tr>
              )

      })
  )
}
export default TableUsers;
