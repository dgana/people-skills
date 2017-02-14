const update_user = (id, i) => {
  let getName = $('#assign_name_'+i).html()
  let getSkill = $(`#assign_skill_${i} p`), getSkillLength = getSkill.get().length
  let getValue = $('#assign_value_'+i).html()

  $('#full_name_update').val(getName)
  // Still in progress for update autofill
  for(let j = 0; j < getSkillLength; j++) {
    $(`#modal_update input[name=skill_${j}]`).val($(`#skill_${i}_${j}`).html())
  }

  $('#submit_update_user').click(function(){
    let userSkills = []
    let userData = $('#update_user_form').serialize().split('&')

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
    console.log(userSkills);
    console.log(name);
    console.log(id);

    $.ajax({
      type: "PUT",
      url: 'http://localhost:3000/api/'+id,
      dataType: 'json',
      data: {
        name: name,
        skills: JSON.stringify(userSkills)
      },
      success: (user) => {
        if(typeof user === 'string') {
          // Duplicate User
          $('#update_message').html(
            `
            <div class="card-panel red lighten-1 col s12 add-message">${user}</div>
            `
          )
        } else {
          // Update Success
          $('#update_message').html(
            `
            <div class="card-panel teal lighten-2 col s12 add-message">Update User Success!</div>
            `
          )
          $('#row_'+i).html(
            `
              <td id="assign_name_${i}">${user.name}</td>
              <td id="assign_skill_${i}"></td>
              <td id="assign_value_${i}"></td>
              <td>
                <div class="row">
                  <button class="waves-effect waves-light red darken-3 btn" onclick="delete_user('${user._id}', ${i})" id="delete_user_${i}"><i class="material-icons left">delete</i>Delete User</button>
                </div>
                <div class="row">
                  <button class="waves-effect waves-light blue darken-3 btn" style="margin-top:-18px;" onclick="update_user('${user._id}', ${i})" id="update_user_${i}" data-target="modal_update"><i class="material-icons left">update</i>Update User</button>
                </div>
              </td>
            `
          )
          for (let k = 0; k < user.skills.length; k++) {
            resultSkills = $('#assign_skill_' + i).append(
              `
              <button class="material-icons left fix-button-position" onclick="delete_skill('${user._id}', ${i}, ${k})" id="delete_${i}_${k}">delete</button>
              <p id="skill_${i}_${k}">${user.skills[k].skill}</p>
              `
            )
          }
          for (let j = 0; j < user.skills.length; j++) {
            resultValue = $('#assign_value_' + i).append(
              `
              <p id="value_${i}_${j}">${user.skills[j].value}</p>
              `
            )
          }
          console.log('Global Index : ' + i);
        }

        setTimeout(function(){
          $('#update_message').html('')
        }, 2500)
      }
    })


  })
}
