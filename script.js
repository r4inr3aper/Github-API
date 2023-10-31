const hero = document.getElementsByClassName("hero");
const url = "https://api.github.com/users/";
const searchBox = document.querySelector("#search");
const getUser = async (username) => {
  const res = await fetch(url + username);
  const data = await res.json();
  console.log(data);
  const card = `
     <div class="left">
          <div class="img">
               <img
                 src="${data.avatar_url}"
               />
               </div>
   
             <div class="details">
               <h2>${data.login}</h2>
               <h3>${data.name}</h3>
               <p>${data.bio}</p>
             </div>
          </div>
  
           <div class="right">
             <p>
               <h4>Breaking News</h4>In the heart of the code cosmos, we introduce
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
