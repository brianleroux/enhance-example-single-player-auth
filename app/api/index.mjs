export async function get (req) {
  let authorized = !!(req.session.authorized)
  return { json: { authorized } }
}
