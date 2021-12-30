const bycrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$Sl/hBD9bQa7s8O8uaMHuDuGTi0T8vYix/0gcMhjpKqY3P9J5ysG7u';
  const isMatch = await bycrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
