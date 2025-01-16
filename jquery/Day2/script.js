

$(document).ready(function () {
    $('#getData').on('click', function () {
      $.ajax({
        url: "http://localhost:3000/posts",
        type: "GET", 
        dataType: "json", 
        success: function (data) {
          
          console.log("Response Data:", data);
          $('#result').text(JSON.stringify(data, null, 2));
        },
        error: function (xhr, status, error) {
         
          console.error("Error:", error);
          $('#result').text(`Error: ${error}`);
        },
      });
    });
  });