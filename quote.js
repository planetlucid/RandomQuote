/*
 * ----------------------------------------------------------------------------
 * « LICENCE BEERWARE » (Révision 42):
 * @notnark a créé ce fichier. Tant que vous conservez cet avertissement,
 * vous pouvez faire ce que vous voulez de ce truc. Si on se rencontre un jour et
 * que vous pensez que ce truc vaut le coup, vous pouvez me payer une bière en
 * retour. Marius
 * ----------------------------------------------------------------------------
 */

$.getJSON('quote.json',function(data) {
    /* Take Random number between 0 & quote length */
    var i = data.quotes.length;
    var nb = Math.floor(Math.random() * i);
    /* Assigne value to variable for easier display */
    var text = data.quotes[nb].text;
    var author = data.quotes[nb].author;
    /* Display the quote */
    $('.quote').html('<p>'+text+'</p><footer>'+author+'</footer>');
});
