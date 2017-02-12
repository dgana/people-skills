let index = 1
$('#button_person_skill').click(function(e) {
  e.preventDefault()

  let arr = ['', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']
  $('#person_skill').append(
    `
      <div class="input-field col s6">
        <input name="skill_${index}" type="text" class="validate" placeholder="Enter your ${arr[index]} Skill">
      </div>
      <div class="input-field col s6">
        <select name="value_${index}">
          <option value="Newbie" selected>Skill Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Amateur">Amateur</option>
          <option value="Advanced">Advanced</option>
          <option value="Professional">Professional</option>
        </select>
      </div>
    `
  )
  $(`select[name=value_${index}]`).material_select()
  index++
})
