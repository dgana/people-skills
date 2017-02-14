let i = 0
let userIDs

let iterateUserData = (i, user, resultUserData) => {
  resultUserData = $('#table_content').append(
    `
    <tr id="row_${i}">
      <td id="assign_name_${i}">${user[i].name}</td>
      <td id="assign_skill_${i}"></td>
      <td id="assign_value_${i}"></td>
      <td>
        <div class="row" style="margin-bottom:-8px;">
        <button class="waves-effect waves-light red darken-3 btn" onclick="delete_user('${userIDs[i]}', ${i})" id="delete_user_${i}"><i class="material-icons left">delete</i>Delete User</button>
        </div>
        <div class="row">
        <button class="waves-effect waves-light blue darken-3 btn" onclick="update_user('${userIDs[i]}', ${i})" id="update_user_${i}" data-target="modal_update"><i class="material-icons left">update</i>Update User</button>
        </div>
      </td>
      <!-- <input type="hidden" value="${userIDs[i]}" name="user_${i}" /> -->
    </tr>
    `
  )
  return resultUserData
}
let iterateSkills = (i, user, resultSkills) => {
  for (let k = 0; k < user[i].skills.length; k++) {
    resultSkills = $('#assign_skill_' + i).append(
      `
      <button class="material-icons left fix-button-position" onclick="delete_skill('${user[i]._id}', ${i}, ${k})" id="delete_${i}_${k}">delete</button>
      <p id="skill_${i}_${k}">${user[i].skills[k].skill}</p>
      `
    )
  }
  return resultSkills
}

let iterateValue = (i, user, resultValues) => {
  for (let j = 0; j < user[i].skills.length; j++) {
    resultValue = $('#assign_value_' + i).append(
      `
      <p id="value_${i}_${j}">${user[i].skills[j].value}</p>
      `
    )
  }
  return resultValues
}

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/api',
  dataType: 'json',
  success: (user) => {
    let userId = []
    for (i; i < user.length; i++) {
      userId.push(user[i]._id)
      localStorage.setItem('user_id', userId)
      userIDs = localStorage.getItem('user_id').split(',')
      iterateUserData(i, user)
      iterateSkills(i, user)
      iterateValue(i, user)
    }
  }
})
