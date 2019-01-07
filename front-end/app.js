$(document).ready(function() {
  let siteData;
  const $form = $("form");
  const $alert = $("#alert");
  const API_KEY = "abcd1234";
  const url = 'https://script.google.com/macros/s/AKfycbzwWFiOiGq7Cgi96pD313cY21L_5OrkEGo6eZUV3B4FxVqIaaw/exec';
  $.get({
    url: `${url}?key=${API_KEY}`,
    success: function(data) {
      let json = JSON.parse(data);
      json.data.map(content => {
        siteData = content;
        renderContainer(content);
      });
    },
    error: function(error) {
      console.log(`Error ${ error }`);
    }
  });

  $form.submit( e => {
    e.preventDefault();
    $.post({
      url: url,
      data: $form.serialize(),
      success: function(data) {
        let response = JSON.parse(data);
        if(response.formIsValid)
          $alert.append(alertMessage(response.message, "success"));
        else
          $alert.append(alertMessage(response.message, "danger"));
      },
      error: function(error) {
        $alert.append(alertMessage("Try again later!", "danger"));
      }
    });
    $form[0].reset();
  });

  //create each content section
  function renderContainer(content) {

    let $selectedContainer = $(`#${ content.containerid }`);
    let $selectedListContainer = $(`#list-${ content.containerid }`);
    let contentList = content.list;
    let leftColumn = '<div class="col-md-8 offset-md-3">';
    let rightColumn = '<div class="col-md-8 offset-md-1">';
    let columnPosition = (content.containerposition == 'left') ? leftColumn : rightColumn;

    let lists = contentList.map(item => {
      return `<li>${item}</li>`
    }).join("");

    let list = `<ul>${lists}</ul>`;
    let divContent = `<div class="row">
                        ${ columnPosition }
                          <div class="row justify-content-center">
                            <h3>${ content.title }</h3>
                          </div>
                          <hr>
                          <p class="text-justify">${ content.content }</p>
                        </div>
                      </div>`;
    let divList = `<div class="row">
                        ${ columnPosition }
                          <div class="row justify-content-center">
                            <ul>${lists}</ul>
                          </div>
                        </div>
                      </div>`;

    $selectedContainer.empty();
    $selectedContainer.append(divContent);
    $selectedListContainer.append(divList);
  };

  function alertMessage(messages, style) {
    let messageList = messages.map(msg => {
      return `<li>${msg}</li>`
    }).join("");
    return `<div class="alert alert-${ style }" role="alert">
              <ul>
                ${ messageList }
              </ul>
            </div>`
  };



});
