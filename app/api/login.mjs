export async function post (req) {
  let authorized = req.body.password === 'asdf'
  return {
    location: '/protected',
    session: { authorized }
  }
}
