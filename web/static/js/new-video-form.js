var $newVideoForm = $('#new-video')
var $plusButton = $('.plusWrapper').find('.plus')
var $earButton = $('.plusWrapper').find('.ear')

$plusButton.click(function() {
  searchToggle()
})

$earButton.click(function() { $newVideoForm.submit() })

var searchToggle = function() {
  $newVideoForm.toggleClass('active')
  $plusButton.toggleClass('active')
  $earButton.toggleClass('active')
}

var validateYoutubeUrl = function(youtubeUrl) {
  if (youtubeUrl && youtubeUrl.match(/^http(s?).*\.com\/watch\?v=.{11}$/)) {
    return true
  }
  return false
}

$newVideoForm.submit(function(e){
  e.preventDefault()
  var inputValue, id, goTo
  inputValue = document.getElementById('new-video-input').value

  if (validateYoutubeUrl(inputValue)) {
    id = inputValue.split("v=")[1]
    window.location.href = "#" + id
    searchToggle()
  }
})
