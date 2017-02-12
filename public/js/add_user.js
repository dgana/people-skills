// $.ajax({
//   type: "POST",
//   url: 'http://localhost:3000/api',
//   dataType: 'json',
//   data: $('#input_new_user').serialize()
//   success: (user) => {
//
//   }
// })
$('#submit_add_user').click(function () {
  // var data = $('#input_new_user').serialize().split('&')
  // console.log(data)
  // var obj = {}
  // for (var key in data) {
  //   console.log(data[key])
  //   obj[data[key].split('=')[0]] = data[key].split('=')[1]
  // }
  let dictionary = $('#input_new_user').serialize().split('&').map(function (a) { return a.split('='); })
  console.log(dictionary)
})
