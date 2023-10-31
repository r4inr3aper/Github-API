const hero = document.getElementsByClassName("hero");
const url = "https://api.github.com/users/";
const searchBox = document.querySelector("#search");
const formSubmit = () => {
  if (searchBox.value !== "") {
    getUser(searchBox.value);
  }
  return false;
}
const getUser = async (username) => {
  
  fetch(url + username)
  .then((res) =>{ return res.json()})
  .then((data)=>{
    console.log(data);
  
  
    document.getElementById('avatar').src=`${data.avatar_url}`
    document.getElementById('username').innerHTML=`Username: ${data.login}`
    document.getElementById('username2').innerHTML=`${data.login}`
    document.getElementById('location1').innerHTML=`Location: ${data.location}`
    document.getElementById('bio').innerHTML=`Bio: ${data.bio}`
    document.getElementById('bio2').innerHTML=`${data.bio}`
    document.getElementById('location').innerHTML=`${data.location}`
    document.getElementById('public_repos').innerHTML=`${data.public_repos}`
    document.getElementById('followers').innerHTML=`${data.followers}`
    document.getElementById('following').innerHTML=`${data.following}`
    document.getElementById('location').innerHTML=`${data.location}`
    document.getElementById('html_url').innerHTML=`${data.html_url}`
    document.getElementById('html_url').href=`${data.html_url}`
  }
  )
  .catch((error)=>{
   alert("error")
  })
}
