export async function get (req) {
  let authorized = !!(req.session.authorized)
  if (!authorized) {
    return { location: '/' }
  }
  return { 
    json: { authorized }
  }
}
