const hero = document.getElementsByClassName("hero");
const url = "https://api.github.com/users/";
const searchBox = document.querySelector("#search");
const getUser = async (username) => {
  
  const res = await fetch(url + username);
  const data = await res.json();
  console.log(data);
  let imgcon=document.createAttribute('imgcon');
  imgcon.value=`${data.avatar}`

  var attr = document.createAttribute('step');
  attr.value="any";

  document.getElementById('avatar').src=`${data.avatar_url}`
  document.getElementById('username').innerHTML=`${data.login}`
  document.getElementById('username2').innerHTML=`${data.login}`
  document.getElementById('name').innerHTML=`${data.name}`
  document.getElementById('bio').innerHTML=`${data.bio}`
  document.getElementById('bio2').innerHTML=`${data.bio}`
  document.getElementById('location').innerHTML=`${data.location}`
  document.getElementById('public_repos').innerHTML=`${data.public_repos}`
  document.getElementById('followers').innerHTML=`${data.followers}`
  document.getElementById('following').innerHTML=`${data.following}`
  document.getElementById('location').innerHTML=`${data.location}`
  document.getElementById('html_url').innerHTML=`${data.html_url}`
}
const formSubmit = () => {
  if (searchBox.value !== "") {
    getUser(searchBox.value);
  }
  return false;
};

               you to ${data.login}, a coding virtuoso known for their ${data.public_repos} repositories, drawing in ${data.followers}
               followers and following ${data.following}.
               Hailing from ${data.location}, they're the subject of our next profile
               exploration. Dive into their coding journey and discover more on
               their GitHub profile ${data.html_url}. Their bio
               reads, "${data.bio}". Join us as we unravel the code of ${data.login}
               and their captivating GitHub story.
             </p>
           </div>
     `;

           hero.innerHTML = card;
};

const formSubmit = () => {
  if (searchBox.value !== "") {
    getUser(searchBox.value);
  }
  return false;
};
