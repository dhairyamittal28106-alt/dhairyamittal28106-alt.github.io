const githubUsername = "dhairyamittal28106-alt";

fetch(`https://api.github.com/users/${githubUsername}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("github-avatar").src = data.avatar_url;
  });
