export default function nav ({ html, state }) {
  let links = [
    '<a href=/ class=underline>home</a>'
  ]
  if (state.store.authorized) {
    links.push('<a href=/protected class=underline>protected</a>')
  }
  return html`
    <nav>${ links.join('') }</nav>
  `
}

