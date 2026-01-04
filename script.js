document.addEventListener('keydown', e=>{
  if(e.ctrlKey && e.key === 'k'){
    document.body.style.background = '#22c55e';
  }

  if(e.ctrlKey && e.key === 'r'){
    document.body.style.background = '#0f172a';
  }
});
