function delete_skill(id, i, k) {
  console.log(id, i, k);
  let getSkill = $(`#skill_${i}_${k}`).html()
  console.log(getSkill);
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/api/remove_skill/'+id,
    data: {skill: getSkill},
    dataType: 'json',
    success: function(){
      $(`#delete_${i}_${k}`).remove()
      $(`#skill_${i}_${k}`).remove()
      $(`#value_${i}_${k}`).remove()
    }
  })
}
