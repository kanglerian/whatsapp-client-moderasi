const changeType = () => {
  let type = $('#url').attr('type');
  if(type === 'password'){
    $('#url').attr('type', 'text');
  } else {
    $('#url').attr('type', 'password');
  }
}