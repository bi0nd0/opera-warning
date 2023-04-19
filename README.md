# Info pop-up
Pop up to inform users that a new version of the website is available

## How to use

The script is hosted on github pages. Github pages is preferred to using the raw URL because it behaves like a CDN.

Add the main script to the page:
```
<script type="module" src="//bi0nd0.github.io/opera-warning/main.js"></script>
```

### Note about http and CORS
Github pages enforces https. Since the opera's web server is http-only, I had to create a custom domain
for the github page: opera-warning.3bees.it.
The custom domain is matched to the githubpages using a cname configuration:
```
opera-warning.3bees.it => bi0ndo.github.io
```
The updated code is:
```
<script type="module" src="//opera-warning.3bees.it/main.js"></script>
```

## Notes for self-hosting

If the `main.js` is served from the new website, then CORS must be setup to allow the target website.

```
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type, Authorization"
```

to restrict the access to only the target website, the modify `Access-Control-Allow-Origin`:
```
Header set Access-Control-Allow-Origin "https://example.com, https://example.org"
```