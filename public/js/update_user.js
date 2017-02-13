const update_user = (id, i) => {
  let getName = $('#assign_name_'+i).html()
  console.log(getName);
  let getSkill = $(`#assign_skill_${i} p`)
  console.log(getSkill.get(1).html());
  let getValue = $('#assign_value_'+i).html()
  console.log(getValue);
}
