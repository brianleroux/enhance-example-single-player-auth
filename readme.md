# project structure

### `app/pages/index.html`

Display login form when logged out; and a logout form when logged in.

### `app/pages/protected.html`

Display sensitive information. Only accessible when logged in.

### `app/elements/app-header.mjs`

Custom element for a universal header.

### `app/elements/app-navigation.mjs`

Custom element for a session aware global navigation. Displays a link to the `/protected` page when logged in.

### `app/elements/please-login.mjs`

Custom element that displays a login form or a logout link.

### `app/elements/sensitive-information.mjs`

Custom element with sensitive infomation that we want to protect from prying eyes.

### `app/elements/app-footer.mjs`

Custom element that displays the global state for debugging purposes.

### `app/api/index.mjs`

GET handler that returns the current login state to `/`.

### `app/api/login.mjs`

POST handler that logs you in.

### `app/api/logout.mjs`

POST handler that logs you out.

### `app/api/protected.mjs`

GET handler that ensures the current request is logged in.
