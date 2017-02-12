$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/api',
  dataType: 'json',
  success: (user) => {
    let userId = []
    let iterateUserData = (i, resultUserData) => {
      resultUserData = $('#table_content').append(
        `
        <tr>
          <td>${user[i].name}</td>
          <td id="assign_skill_${i}"></td>
          <td id="assign_value_${i}"></td>
        </tr>
        `
      )
      return resultUserData
    }
    let iterateSkills = (i, resultSkills) => {
      for (let k = 0; k < user[i].skills.length; k++) {
        resultSkills = $('#assign_skill_' + i).append(
          `
          <button class="material-icons left fix-button-position" id="delete_${i}_${k}">delete</button>
          <p id="skill_${i}_${k}">${user[i].skills[k].skill}</p>
          `
        )
      }
      return resultSkills
    }

    let iterateValue = (i, resultValues) => {
      for (let j = 0; j < user[i].skills.length; j++) {
        resultValue = $('#assign_value_' + i).append(
          `
          <p id="value_${i}_${j}">${user[i].skills[j].value}</p>
          `
        )
      }
      return resultValues
    }

    for (let i = 0; i < user.length; i++) {
      iterateUserData(i)
      iterateSkills(i)
      iterateValue(i)
      userId.push(user[i]._id)
      localStorage.setItem('user_id', userId)
    }
    let UserID = localStorage.getItem('user_id').split(',')
    console.log(UserID)
  }
})
