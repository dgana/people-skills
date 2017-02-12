let index = 1
$('#button_person_skill').click(function (e) {
  e.preventDefault()

  let arr = ['', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']
  $('#person_skill').append(
    `
      <div class="input-field col s6">
        <input name="skill_${index}" type="text" class="validate" placeholder="Enter your ${arr[index]} Skill">
      </div>
      <div class="input-field col s6">
        <select name="value_${index}">
          <option value="" disabled selected>Skill Level</option>
          <option value="25">Beginner</option>
          <option value="50">Amateur</option>
          <option value="75">Advanced</option>
          <option value="100">Professional</option>
        </select>
      </div>
    `
  )
  $(`select[name=value_${index}]`).material_select()
  index++
})
