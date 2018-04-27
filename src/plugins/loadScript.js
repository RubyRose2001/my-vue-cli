function loadScript(url) {
  const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) { // IE
      script.onreadystatechange = () => {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else { // Others
      script.onload = () => {
        resolve();
      };
    }
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  });
  return promise;
}
export default loadScript;
