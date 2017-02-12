$('#submit_add_user').click(function() {
  let userData = $('#input_new_user').serialize().split('&')
  let arrUserData = userData.map(function(x) {
    return x.split('=');
  })
  let name = arrUserData[0][1]
  // console.log(arrUserData);
  // console.log(name);
  let userSkills = []
  for (let i = 1; i < arrUserData.length; i += 2) {
    userSkills.push({
      skill: arrUserData[i][1],
      value: arrUserData[i + 1][1]
    })
  }
  // console.log(userSkills);
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/api',
    dataType: 'json',
    data: {
      name: name,
      skills: JSON.stringify(userSkills)
    },
    success: (user) => {
      console.log(user);
    }
  })
})
