$('#submit_add_user').click(function() {
  let userSkills = []
  let userData = $('#input_new_user').serialize().split('&')

  let arrUserData = userData.map(function(x) {
    return x.split('=');
  })
  let name = arrUserData[0][1].split('+').join(' ')

  for (let i = 1; i < arrUserData.length; i += 2) {
    userSkills.push({
      skill: arrUserData[i][1].split('+').join(' '),
      value: arrUserData[i+1][1]
    })
  }
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/api',
    dataType: 'json',
    data: {
      name: name,
      skills: JSON.stringify(userSkills)
    },
    success: (user) => {
      if(typeof user === 'string') {
        // Duplicate User
        $('#add_message').html(
          `
          <div class="card-panel red lighten-1 col s12 add-message">${user}</div>
          `
        )
      } else {
        // Add Success
        $('#add_message').html(
          `
          <div class="card-panel teal lighten-2 col s12 add-message">Add user Success!</div>
          `
        )
        // $('#table_content').append(
        //   `
        //
        //   `
        //
        // )
        console.log('Global Index : ' + i);

      }

    }
  })
})
