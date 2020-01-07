// Init Github
const github = new Github();
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup', e => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show alert
      } else {
        //show profile
      }
    });
  }
});
