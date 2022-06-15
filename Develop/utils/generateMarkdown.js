// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # <b> ${data.Title}</b>
  [![GitHub license](https://img.shields.io/badge/license-${data.License}.svg)](https://github.com/${data.GithubUser}/${data.Title})
  * Programing Langauges Used:  ${data.Languages}

  #TABLE OF CONTENTS 
  * [Project Description](#Project-Description)
  * [Contributers](#Contributers)
  * [User Instructions](#User-Instructions)
  * [Test Instructions](#Test-Instructions)
  * [Questions](#Questions)



  ## Project Description 
  ${data.Description}


  ## Contributers 
  * Were there Contributers involved? ${data.Contribute}
  * Who took part? ${data.Partners}

  ## User Instructions 
  ${data.Usage}
  ${data.Installation}

  ## Test Instructions
  ${data.Test}

  ## Questions 
  * GitHub Username - ${data.GithubUser}
  * Email - ${data.Email}
  * Please feel free to contact me if you have any questions regarding <i> ${data.Title} </i>. 

`;
}

module.exports = generateMarkdown;
