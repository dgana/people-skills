const update_user = (id, i) => {
  let getName = $('#assign_name_'+i).html()
  let getSkill = $(`#assign_skill_${i} p`), getSkillLength = getSkill.get().length
  let getValue = $('#assign_value_'+i).html()

  $('#full_name_update').val(getName)
  // Still in progress for update autofill
  for(let j = 0; j < getSkillLength; j++) {
    $(`#modal_update input[name=skill_${j}]`).val($(`#skill_${i}_${j}`).html())
  }

  
}
