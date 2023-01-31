export default function plsLogin ({ html, state }) {
  let login = `<form method=post action=/login>
    <input type=password name=password placeholder='enter secret'>
    <button>login</button>
  </form>`
  let logout = `<form method=post action=/logout>
    <button>logout</button>
  </form>`
    
  return html`<section>${ state.store.authorized? logout : login }<section>`
}

