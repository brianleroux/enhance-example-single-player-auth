export default function footer ({ html, state }) {
  return html`<hr><pre>${JSON.stringify(state, null, 2)}</pre>`
}
