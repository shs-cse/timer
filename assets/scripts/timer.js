document.addEventListener('DOMContentLoaded', function() {
    const title = document.title;

    const timer = document.getElementById('timer');
    const help = document.getElementById('help');

    const audio = new Audio('assets/sounds/bicycle-horn-1.wav');

    let value = null;
    let end = null;

    if (window.location.hash) {
        value = window.location.hash.substr(1);
    } else {
        value = '00:01:00';

        document.body.classList.add('help');
    }

    timer.innerHTML = format(value);
    updateTitle();

    // autostart timer
    if (window.obsstudio) {
        window.addEventListener('obsSourceVisibleChanged', function(event) {
            if (event.detail) {
                startTimer();
            } else {
                clearTimer();
            }
        });
    }

    let autohide = setTimeout(function() {
        document.body.classList.remove('help');
    }, 5000);

    document.onkeypress = function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Cancel timer
        if (e.charCode === 113) { // q
            stopTimer();
        }

        // Clear timer
        if (e.charCode === 99) {
            clearTimer();
        }

        // Start timer
        if (e.charCode === 13) { // enter
            startTimer();
        }

        if (e.key === 'h') {
            toggleHelp();
        }

        if (e.key === 's') {
            if (document.body.classList.contains('sound')) {
                document.body.classList.remove('sound');
            } else {
                document.body.classList.add('sound');
            }
            updateTitle();
        }

        // Set timer
        if (e.charCode >= 48 && e.charCode <= 57) { // numbers
            value = format(value + String.fromCharCode(e.charCode));
            timer.innerHTML = value;
            timer.classList.remove('ended');

            window.location.hash = '#' + value;

            updateTitle();
        }
    }

    function startTimer() {
        const time = parse(value);
        end = (new Date().getTime() / 1000) + time.hours * 60 * 60 + time.minutes * 60 + time.seconds;
        timer.classList.remove('ended');
        window.requestAnimationFrame(showTime);
    }

    function stopTimer() {
        const urlParams = new URLSearchParams(window.location.search);
        let value = window.location.hash.substr(1);
        end = null;

        timer.classList.remove('ended');

        timer.innerHTML = format(value);

        updateTitle();
    }

    function endTimer() {
        timer.classList.add('ended');

        if (document.body.classList.contains('sound')) {
            audio.play();
        }
    }

    function clearTimer() {
        value = format("");
        timer.innerHTML = value;
        timer.classList.remove('ended');

        window.location.hash = '#' + value;

        updateTitle();
    }

    function showTime() {
        if (!end) {
            return;
        }

        const remaining = end - (new Date().getTime() / 1000);

        let s = 0, m = 0, h = 0;

        s = Math.ceil(remaining);

        m = Math.floor(s / 60);
        s = s % 60;

        h = Math.floor(m / 60);
        m = m % 60;

        s = s.toString().padStart(2, '0');
        m = m.toString().padStart(2, '0');
        h = h.toString().padStart(2, '0');

        timer.innerHTML = format([h, m, s].join(':'));

        updateTitle()

        if (end && remaining >= 0) {
            requestAnimationFrame(showTime);
        } else {
            endTimer();
        }
    }

    function parse(str) {
        const a = str.split(':');
        return {
            hours: parseInt(a[0]),
            minutes: parseInt(a[1]),
            seconds: parseInt(a[2]),
        }
    }

    function format(str) {
        return str.replace(/:/g, '').padStart(6, '0').slice(-6).replace(/(.{2})/g,"$1:").slice(0, -1);
    }

    function toggleHelp() {
        clearTimeout(autohide);
        if (document.body.classList.contains('help')) {
            document.body.classList.remove('help');
        } else {
            document.body.classList.add('help');
        }
    }

    function updateTitle() {
        if (document.body.classList.contains('sound')) {
            document.title = timer.innerHTML + ' ⏰ | ' + title;
        } else {
            document.title = timer.innerHTML + ' | ' + title;
        }
    }
});