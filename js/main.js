document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.service-link');
    const serviceImage = document.getElementById('serviceImage');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const newImageSrc = this.getAttribute('data-img');
            serviceImage.setAttribute('src', newImageSrc);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var counter1 = new CountUp('counter1', 1287);
    var counter2 = new CountUp('counter2', 5786);
    var counter3 = new CountUp('counter3', 1440);
    var counter4 = new CountUp('counter4', 7110);

    if (!counter1.error) {
        counter1.start();
    } else {
        console.error(counter1.error);
    }

    if (!counter2.error) {
        counter2.start();
    } else {
        console.error(counter2.error);
    }

    if (!counter3.error) {
        counter3.start();
    } else {
        console.error(counter3.error);
    }

    if (!counter4.error) {
        counter4.start();
    } else {
        console.error(counter4.error);
    }
});