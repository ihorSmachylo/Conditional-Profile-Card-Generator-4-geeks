import { left } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null//
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let twitter = '<a href="#"><i class="fab fa-twitter"></i></a>';
  if(variables.twitter){
    twitter = '<a href="https://twitter.com/' + variables.twitter + '" target="_blank"><i class="fab fa-twitter"></i></a>';
  }
  let github = '<a href="#"><i class="fab fa-github"></i></a>';
  if(variables.github){
    github = '<a href="https://github.com/' + variables.github + '" target="_blank"><i class="fab fa-github"></i></a>';
  }
  let linkedin = '<a href="#"><i class="fab fa-linkedin"></i></a>';
  if(variables.linkedin){
    linkedin = '<a href="https://linkedin.com/' + variables.linkedin + '" target="_blank"><i class="fab fa-linkedin"></i></a>';
  }
  let instagram = '<a href="#"><i class="fab fa-instagram"></i></a>';
  if(variables.instagram){
    instagram = '<a href="www.instagramn.com/' + variables.instagram + '" target="_blank"><i class="fab fa-instagram"></i></a>';
  }


  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name:"Your name"} ${variables.lastname ? variables.lastname:"Your last name"}</h1>
          <h2>${variables.role ? variables.role : "Your job"}</h2>
          <h3>${variables.city ? variables.city:"Your city"} ${variables.country ? variables.country:"Your country"}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li>${twitter}</li>
            <li>${github}</li>
            <li>${linkedin}</li>
            <li>${instagram}</li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin:null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
