function saveInput() {
  var input = document.getElementById("username-input").value;
  localStorage.setItem("myInput", input);
}

window.onload = function () {
  let userNM = localStorage.getItem("myInput");
  if (userNM) {
    console.log(userNM);
    let requestURL = "https://api.github.com/users/"+userNM;
  console.log(requestURL);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let data = JSON.parse(this.responseText);
      let name = data.name;
      let profile_photo = data.avatar_url;
      let repo = data.public_repos;
      let followers = data.followers;
      let following = data.following;
      let repo_url = data.html_url;
      let github_profile = data.html_url;
      document.querySelector("#profile-photo").src = profile_photo;
      document.querySelector("#github-name").innerHTML = name;
      document.querySelector("#repo").innerHTML = repo;
      document.querySelector("#repo").href = repo_url;
      document.querySelector("#followers").innerHTML = followers;
      document.querySelector("#following").innerHTML = following;
      document.querySelector("#btn1").href = github_profile;
      //   document.querySelector('#btn2').innerHTML = repo_url;
      console.log(repo_url);
    }
  };
  xhr.send();
  }

  
};
