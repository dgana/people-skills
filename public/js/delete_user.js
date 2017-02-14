const delete_user = (id, i) => {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/api/'+id,
    dataType: 'json',
    data: { id: id },
    success: (data) => {
      $('#global_message').html(
        `
        <div class="card-panel red darken-2 col s12 add-message">Delete user Success!</div>
        `
      )
      $('#row_'+i).remove();
      setTimeout(function(){
        $('#global_message').html('')
      }, 2500)
    }
  })
}
