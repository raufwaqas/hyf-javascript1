fetch("https://www.breakingbadapi.com/api/characters")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let html = '';

    for (let artistBio = 0; artistBio < data.length; artistBio++) {

      const artist = data[artistBio];

      const wrapper = document.querySelector("#characters");

      const character = document.createElement('div');
      character.setAttribute("class", "artist"),
        wrapper.appendChild(character)


      const characterimgDIV = document.createElement("div");
      characterimgDIV.setAttribute('class', "pic");



      const characterImg = document.createElement("img");
      characterImg.setAttribute('class', "bild");
      //characterImg.style.height = '430px'
      characterImg.setAttribute("src", artist.img);
      characterimgDIV.appendChild(characterImg);
      character.appendChild(characterimgDIV);

      // Title section

      const characterTitleDIV = document.createElement("div");
      characterTitleDIV.setAttribute('class', "title-section");

      const characterTitleh4 = document.createElement("h4");
      characterTitleh4.setAttribute('class', "title");
      characterTitleh4.innerText = artist.name;

      const characterTitleSpan = document.createElement("span");
      characterTitleSpan.setAttribute('class', "status");
      characterTitleSpan.innerText = artist.status;

      characterTitleDIV.appendChild(characterTitleh4);

      characterTitleDIV.appendChild(characterTitleSpan);

      character.appendChild(characterTitleDIV);

      // End Title section

      // Lower section

      var occupation = "";
      for (var i = 0; i < artist.occupation.length; i++) {
        if (occupation == "") {
          occupation = artist.occupation[i];
        }
        else {
          occupation += ", " + artist.occupation[i];
        }

      }
      const characterLowerSectionDIV = document.createElement("div");
      characterLowerSectionDIV.setAttribute('class', "lower-section");

      const characterLowerSectionh5_1 = document.createElement("h5");
      characterLowerSectionh5_1.setAttribute('class', "des");
      characterLowerSectionh5_1.innerText = "Also Known as";

      const characterLowerSectionp_1 = document.createElement("p");

      const strong1 = document.createElement("strong");
      strong1.innerText = artist.nickname;
      characterLowerSectionp_1.appendChild(strong1);

      const characterLowerSectionh5_2 = document.createElement("h5");
      characterLowerSectionh5_2.setAttribute('class', "des");
      characterLowerSectionh5_2.innerText = "Occupation";

      const characterLowerSectionp_2 = document.createElement("p");
      const strong2 = document.createElement("strong");
      strong2.innerText = occupation;
      characterLowerSectionp_2.appendChild(strong2);


      characterLowerSectionDIV.appendChild(characterLowerSectionh5_1);
      characterLowerSectionDIV.appendChild(characterLowerSectionp_1);
      characterLowerSectionDIV.appendChild(characterLowerSectionh5_2);
      characterLowerSectionDIV.appendChild(characterLowerSectionp_2);


      character.appendChild(characterLowerSectionDIV);


    }
  });


