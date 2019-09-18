import React from 'react';
import { Paper, Table, TableBody, TableCell, TableRow,
  TableHead, Container } from '@material-ui/core';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = [
      { uid: '12345', name: 'Leonardo', email: 'lorem@gmail.com' },
      { uid: '67890', name: 'Raphael', email: 'ipsum@gmail.com' },
      { uid: '23423', name: 'Michelangelo', email: 'dolor@gmail.com' },
      { uid: '21334', name: 'Donatello', email: 'sit@gmail.com' }
    ];

    return (
      <Container component="main" maxWidth="sm">
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell align="center">UID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map(row => (
              <TableRow key={row.uid}>
                <TableCell align="center">{row.uid}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
        </Container>
    );
  }
}

export default UserList;