let index = 0
let indexUpdate = 0

function button_remove_skill(i) {
  $('#id_remove__'+i).remove()
}

$('#button_person_skill').click(function(e) {
  e.preventDefault()
  index++
  let arr = ['', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']
  $('#person_skill').append(
    `
      <div id="id_remove__${index}">
        <div class="input-field col s6">
          <input name="skill_${index}" type="text" class="validate" placeholder="Enter your ${arr[index]} Skill">
        </div>
        <div class="input-field col s5">
          <select name="value_${index}">
            <option value="Newbie" selected>Skill Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Amateur">Amateur</option>
            <option value="Advanced">Advanced</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div class="input-field col s1">
          <button class="waves-effect waves-light red darken-3 btn" onclick="button_remove_skill(${index})" id="button_remove__skill_${index}"><i class="material-icons left">call_made</i></button>
        </div>
      </div>
    `
  )
  $(`select[name=value_${index}]`).material_select()
})

$('#button_person_skill_update').click(function(e) {
  e.preventDefault()
  indexUpdate++
  let arr = ['', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth']
  $('#person_skill_update').append(
    `
      <div id="id_remove_update_${indexUpdate}">
        <div class="input-field col s6">
          <input name="skill_${indexUpdate}" type="text" class="validate" placeholder="Enter your ${arr[indexUpdate]} Skill">
        </div>
        <div class="input-field col s5">
          <select name="value_${indexUpdate}">
            <option value="Newbie" selected>Skill Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Amateur">Amateur</option>
            <option value="Advanced">Advanced</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div class="input-field col s1">
          <button class="waves-effect waves-light red darken-3 btn" onclick="button_remove_skill_update(${indexUpdate})" id="button_remove__skill_update_${indexUpdate}"><i class="material-icons left">call_made</i></button>
        </div>
      </div>
    `
  )
  $(`select[name=value_${indexUpdate}]`).material_select()
})
