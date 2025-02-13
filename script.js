function moveButton() {
    const button = document.querySelector(".no");
    const yesButton = document.querySelector(".yes");

    const maxX = window.innerWidth - button.clientWidth - 20;
    const maxY = window.innerHeight - button.clientHeight - 20;

    let randomX, randomY, overlap;

    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;

        // Sprawdzanie, czy nowa pozycja nie nachodzi na "Tak"
        const buffer = 100; // Większa odległość między przyciskami
        overlap =
            randomX < yesButton.offsetLeft + yesButton.clientWidth + buffer &&
            randomX + button.clientWidth > yesButton.offsetLeft - buffer &&
            randomY < yesButton.offsetTop + yesButton.clientHeight + buffer &&
            randomY + button.clientHeight > yesButton.offsetTop - buffer;
    } while (overlap);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
