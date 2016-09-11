var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save');

//onload functions that find any ideas in local storage and display them on the page//

onLoad();

function onLoad(){
  checkLocalOrMakeLocal();
  displayIdeas();
};

function checkLocalMakeLocal(){
  if (localStorage.getItem("ideas") === null){
    localStorage.setItem("ideas", JSON.stringify([]))
  };
};

function getIdeas(){
 return JSON.parse(localStorage.getItem("ideas"));
};

function displayIdeas(){
  var ideas = getIdeas();
  ideas.forEach(function(idea) {
    ideaCard(idea.id, idea.title, idea.body, idea.quality);
  });
};

//constructor defining what an idea is//

function Idea(id, title, body, quality) {
  this.id = parseInt(id);
  this.title = title;
  this.body = body;
  this.quality = quality;
};

// gives unique id to each created idea//
function uniqueId() {
  return Date.now().toString();
};
//save button disabled if input fields are empty//

//functions for grabbing the input from the user//
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

function clearInputFields() {
  $titleInput.val('');
  $bodyInput.val('');
};

//takes that input data that has been stored and creates idea card to display, prepends as article to section designated in html//
function makeNewIdea() {
  var newIdea = new Idea(idGenerator(), getTitleInput(), getBodyInput(), 'Swill')
  currentIdeas= getIdeas();
  currentIdeas.push(newIdea);
  localStorage.setItem('ideas', JSON.stringify(currentIdeas));
  makeIdeaCard(newIdea.id, newIdea.title, newIdea.body, 'Swill');
  clearInputs();
  // toggleButton();
};

function clearInputs() {
  $titleInput.val('');
  $bodyInput.val('');
};

//takes input data and creates idea card to display, prepends as article to section designated in html//
function ideaCard(id, title, body, quality) {
  $('.idea-list').prepend(`
    <article id="`+ id +`" class="idea-card">
      <h2 class="editable" contenteditable="true">` + title + `</h2>
      <button class="delete-idea"></button>
      <p class="editable idea-body" contenteditable="true">` + body + `</p>
      <button class="upvote"></button>
      <button class="downvote"></button>
      <p class= "idea-quality ` + quality +`"><span>Quality:</span> <span class="displayed-quality">` + quality + `</span> </p>
    </article>`);
};

//takes inputs and turns into idea object, pushes that to storage, also runs the function above to display the newly created/stored idea card//
function makeNewIdea() {
  var newIdea = new Idea(uniqueId(), getTitle(), getBody(), 'Swill')
  existingIdeas = getIdeas();
  existingIdeas.push(newIdea);
  localStorage.setItem('ideas', JSON.stringify(existingIdeas));
  ideaCard(newIdea.id, newIdea.title, newIdea.body, 'Swill');
  clearInputFields();
};

//runs the above functions on click of save//
$($saveButton).on('click', makeNewIdea);

//deleting ideas from the display AND ALSO from storage//
$('.idea-list').on('click', '.delete-idea', removeParent);

function removeParent() {
  var ideaArticle = $(this).closest('.idea-card');
  var idToDeleteFromStorage = parseInt(ideaArticle.attr("id"));
  deleteIdeaFromStorage(idToDeleteFromStorage);
  ideaArticle.remove();
};

function deleteIdeaFromStorage(toBeDeleteID) {
  var existingIdeas = getIdeas();
  existingIdeas = existingIdeas.filter(function(idea, index) {
    return idea.id !== parseInt(toBeDeleteID)
  });
  localStorage.setItem("ideas", JSON.stringify(existingIdeas));
};

//upvote and downvote buttons update quality in display AND in local storage//
$('.idea-list').on('click', '.upvote', upVote);
$('.idea-list').on('click', '.downvote', downVote)

function upVote() {
  var ideaArticle = $(this).closest('.idea-card');
  var ideaQuality = ideaArticle.find('.displayed-quality').text();
  if (ideaQuality === 'Swill') {ideaArticle.find('.displayed-quality').text('Plausible')}
  if (ideaQuality === 'Plausible') {ideaArticle.find('.displayed-quality').text('Genius')}
};

function downVote() {
  var ideaArticle = $(this).closest('.idea-card');
  var ideaQuality = ideaArticle.find('.displayed-quality').text();
  if (ideaQuality === 'Genius') {ideaArticle.find('.displayed-quality').text('Plausible')};
  if (ideaQuality === 'Plausible') {ideaArticle.find('.displayed-quality').text('Swill')};
};
