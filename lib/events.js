// input field character counter

// define globals for main functions
// task title field
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save');
// body field
// upvote button
// downvote button
// remove button
// completed tasks button

function getTitle() {
  var ideaTitle = $titleInput.val();
  return ideaTitle;
};
function getBody() {
  var ideaBody = $bodyInput.val();
  return ideaBody;
};
function getSearch() {
  var searchInput = $('.search-field').val();
  return searchInput;
};
