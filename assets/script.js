// Optional niceties: update title from stack text and small keyboard shortcut
(function(){
  const parts = Array.from(document.querySelectorAll('.stack span')).map(s => s.textContent.trim());
  if (parts.length) document.title = parts.join(' · ');
  // Press "L" to toggle light/dark (overrides OS preference until refresh)
  let forced = null;
  function setTheme(mode){
    document.documentElement.dataset.theme = mode || '';
    document.documentElement.style.colorScheme = mode || '';
  }
  window.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'l'){
      forced = forced === 'dark' ? 'light' : 'dark';
      setTheme(forced);
    }
  });
})();
