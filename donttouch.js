// Remove the line that selects and removes the "Digital Clock" element
document.querySelector('.clock-text').remove();

// Create a new div for the centered text
const centeredText = document.createElement('div');
centeredText.innerHTML = "<div class='clock-text'>"+
                            "<center>"+
                                "Glowing Digital Clock<br> By @QIB.Je"+
                                "</center>"+
                         "</div>";
document.body.appendChild(centeredText);