export async function post (req) {
  let authorized = req.body.password === process.env.SECRET_PASSWORD
  return {
    location: '/protected',
    session: { authorized }
  }
}
