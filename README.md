# Info pop-up
Pop up to inform users that a new version of the website is available

The `main.js` is served from the new website, so CORS must be setup to allow the target website.

```
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type, Authorization"
```

to restrict the access to only the target website, the modify `Access-Control-Allow-Origin`:
```
Header set Access-Control-Allow-Origin "https://example.com, https://example.org"
```

## How to use

The script is hosted on github pages.

Add the main script to the page:
```
<script type="module" src="//bi0nd0.github.io/opera-warning/main.js"></script>
``