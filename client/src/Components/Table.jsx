import React from 'react'

export const Table = ({ search, data }) => {
  return (
    <>
    <table className="table table-dark table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
        </tr>
            ))
        }
        </tbody>
    </table>
    </>
  )
}
