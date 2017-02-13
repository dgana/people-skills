let index = 0

// $(document).ready(function(){
//   $(``).click( function( event ) {
//     event.preventDefault();
//     $(`#id_remove__${index}`).remove()
//   });
// })
// $(document).ready(function(){
//   document.getElementById(`button_remove__skill_${index}`).click(function(e){
//     // e.stopPropagation();
//     // $('#id_remove__'+index).remove()
//     alert('halo')
//   })
// });

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
