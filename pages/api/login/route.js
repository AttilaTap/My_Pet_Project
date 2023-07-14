const prisma = require('../../../lib/prisma');
const bcrypt = require('bcryptjs');

async function post(request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else {
    return new Response(JSON.stringify(null));
  }
}

module.exports = { post };
