javascript:escapeHTMLPolicy = trustedTypes.createPolicy('default', {createHTML: (string) => string, createScriptURL: string => string, createScript: string => string,});const notes = document.createElement('notes'); document.body.appendChild(notes); notes.id = "notes"; notes.classList.add('material-icons','notes-minimize'); var script = document.createElement('script'); script.src = escapeHTMLPolicy.createScriptURL('https://tools-automate.github.io/escala/assets/js/main.js'); document.body.appendChild(script);


