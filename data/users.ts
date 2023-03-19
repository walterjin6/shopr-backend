import * as bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@shopr.com',
    password: bcrypt.hashSync('test@123', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@shopr.com',
    password: bcrypt.hashSync('test@123', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@shopr.com',
    password: bcrypt.hashSync('test@123', 10),
  },
]

export { users }
