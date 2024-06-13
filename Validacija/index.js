function validacija  ()  {
    let input = document.querySelector('#email');
    let value = input.value;

    // Provera da li value(string) sadrzi @ i .
    if (value.includes('@') && value.includes('.')) {
        let pozicijaAt = value.indexOf('@'); // Proveramo poziciju @
        let pozicijaTacka = value.indexOf('.'); // Proveramo poziciju .

        // Uzimamo vrednost izmedju pozicija @ i . i ne ukljucuje poslednju poziciju
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);

        // Da li izmedju . i @ ima vise od 0 karaktera
        if (izmedjuAtTacka.length > 0) {
            let preAt = value.substring(0, pozicijaAt); // Ispravljeno: uzimamo vrednost pre @

            // Proveravamo da li pre @ ima vise od 2 karaktera
            if (preAt.length > 2) {
                let posleTacke = value.substring(pozicijaTacka + 1); // Ispravljeno: uzimamo vrednost posle tacke

                // Proveravamo da li posle tacke ima vise od 1 karaktera
                if (posleTacke.length > 1) {
                    console.log('Email je validan');
                } else {
                    console.log('Email nije validan');
                }
            } else {
                console.log('Email nije validan');
            }
        } else {
            console.log('Email nije validan');
        }
    } else {
        console.log('Email nije validan');
    }
};
