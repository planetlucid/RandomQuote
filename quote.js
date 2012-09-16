/*
 * ----------------------------------------------------------------------------
 * « LICENCE BEERWARE » (Révision 42):
 * @notnark a créé ce fichier. Tant que vous conservez cet avertissement,
 * vous pouvez faire ce que vous voulez de ce truc. Si on se rencontre un jour et
 * que vous pensez que ce truc vaut le coup, vous pouvez me payer une bière en
 * retour. Marius
 * ----------------------------------------------------------------------------
 */

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
                    $('.quote').html('<p>'+text+'</p><footer>'+author+'</footer>');
                }
            }
