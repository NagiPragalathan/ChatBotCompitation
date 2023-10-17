function getBotResponse(input) {
    let chatbotResUrl = "";
    const file = imageInput.files[0];
    const text = document.getElementById("textInput");
    console.log("working..")
    const toggleInput = document.querySelector('input[type="checkbox"]');
    if (toggleInput.checked) {
        chatbotResUrl = "chatbot_res";
        console.log('Toggle switch is toggled (in the "on" state).');
        if (file) {
          console.log("True")
            const formData = new FormData();
            formData.append('image', file);
            formData.append('text', text);
            fetch('/upload_image', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
                },
            })
            .then(response => response.json())
            .then(data => {
                // resultElement.textContent = data.content;
                let botHtml = '<p class="botText"><span>' + data.content + '</span></p>';
                $("#chatbox").append(botHtml);
                console.log(data.response)
                return data
            })
            .catch(error => {
                let botHtml = '<p class="botText"><span>' + "SomeThing Went Worng..{-_-}" + '</span></p>';
                $("#chatbox").append(botHtml);
                console.log(data.response)
                console.error('Error:', error);
                return data
            });
        }else{
          console.log("Image not choosed...!")
          $.ajax({
            type: "POST",
            url: chatbotResUrl,
            data: {
              message: input,
            },headers: {
              'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
          },
            success: function (data) {
              let botHtml = '<p class="botText"><span>' + data.response + '</span></p>';
              $("#chatbox").append(botHtml);
              console.log(data.response)
              return data
            },
            error: function (data) {
              let botHtml = '<p class="botText"><span>' + "SomeThing Went Worng..{-_-}" + '</span></p>';
                $("#chatbox").append(botHtml);
                console.log(data.response)
                console.error('Error:', error);
                return data
            },
          });
        }
      } else {
        chatbotResUrl = "upload_image";
        console.log('Toggle switch is not toggled (in the "off" state).');
        if (file) {
          console.log("AI True File are added in the Ai.")
            const formData = new FormData();
            formData.append('image', file);
            formData.append('text', text);
            fetch('/upload_image', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
                },
            })
            .then(response => response.json())
            .then(data => {
                // resultElement.textContent = data.content;
                let botHtml = '<p class="botText"><span>' + data.content + '</span></p>';
                $("#chatbox").append(botHtml);
                console.log(data.response)
                return data
            })
            .catch(error => {
                let botHtml = '<p class="botText"><span>' + "SomeThing Went Worng..{-_-}" + '</span></p>';
                $("#chatbox").append(botHtml);
                console.log(data.response)
                console.error('Error:', error);
                return data
            });
        }else{
          console.log("Image is not choosed...!")
        }
        
    }
    console.log(chatbotResUrl)

  }
  let botTextElements = document.querySelectorAll('.botText');

  // Loop through each element and attach a click event listener
  botTextElements.forEach(function (element) {
    element.addEventListener('click', function () {
      // Get the text content of the clicked p tag
      let text = this.querySelector('span').textContent;
      // Copy the text to clipboard
      navigator.clipboard.writeText(text)
        .then(function() {
          // Alert the user that the text has been copied
          alert("Copied to clipboard: " + text);
        })
        .catch(function(error) {
          console.error('Failed to copy text: ', error);
        });
    });
  });
  
  
  
  
  
  
// function getBotResponse(input) {
//     //rock paper scissors
//     if (input == "rock") {
//         return "paper";
//     } else if (input == "paper") {
//         return "scissors";
//     } else if (input == "scissors") {
//         return "rock";
//     }

//     // Simple responses
//     if (input == "hello") {
//         return "Hello there!";
//     } else if (input == "goodbye") {
//         return "Talk to you later!";
//     } else {
//         return "Try asking something else!";
//     }
// }