document.querySelector('.clock-text').remove();

const centeredText = document.createElement('div');
centeredText.innerHTML = "<div class='clock-text'>"+
                            "<center>"+
                                "Glowing Digital Clock<br> By @QIB.Je"+
                                "</center>"+
                         "</div>";
document.body.appendChild(centeredText);
