export default class RemoteFileLoader {
    static loadCss(url, attributes={}) {

        return new Promise((resolve, reject) => {
            const element = document.createElement('link');
            element.rel = 'stylesheet';
            element.type = 'text/css';
            element.href = url;
            element.onload = resolve;
            element.onerror = reject;
            RemoteFileLoader.setAttributes(element, attributes)
            document.body.appendChild(element);
          });
    }
  
    static loadJs(url, attributes={}) {
        return new Promise((resolve, reject) => {
            const element = document.createElement('script');
            element.type = 'text/javascript';
            element.src = url;
            element.onload = resolve;
            element.onerror = reject;
            RemoteFileLoader.setAttributes(element, attributes)
            document.body.appendChild(element);
          });
    }

    static setAttributes(element, attributes={}) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value)
        }
    }


  }