var req = new XMLHttpRequest();
            req.open("GET", "quote.json", true);
            req.onreadystatechange = quoteParser;
            req.send(null);
            function quoteParser(){
                if (req.readyState === 4) {
                    var quote = eval('(' + req.responseText + ')');
                    /* Take Random number between 0 & quote length */
                    var i = quote.quotes.length;
                    var nb = Math.floor(Math.random() * i);
                    /* Assigne value to variable for easier display */
                    var text = quote.quotes[nb].text;
                    var author = quote.quotes[nb].author;
                    /* Display the quote */
                    $('.quote p').html(text);
                    $('.quote footer').html(author);
                }
            }
