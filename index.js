    const button = document.querySelector('#btn');
    button.addEventListener('click', timer);

    function timer() {
        const minute = Number( document.querySelector('#minute').value);
        const second = Number(document.querySelector('#second').value);
        const hour = Number(document.querySelector('#hour').value);
        
        let amountTime = ((hour * 60 * 60) + (minute * 60) + second);

        function calculate() {
            const countDown = document.querySelector('#countDown');
    
            let displayHour = Math.floor(amountTime/3600%60);
            let displayMinute = Math.floor(amountTime/60%60);
            let displaySecond = amountTime%60;

            if (displaySecond < 10) displaySecond = '0' + displaySecond;
            if (displayMinute < 10) displayMinute = '0' + displayMinute;
            if (displayHour < 10) displayHour = '0' + displayHour;

            countDown.style.display = 'block';
            countDown.textContent = `${displayHour} : ${displayMinute} : ${displaySecond}`;
            amountTime--;

            if (amountTime < 0) {
                clearTimer();
                amountTime = 0;
            }

             function clearTimer () {
                clearInterval(timeID);
                const containerButtton = document.querySelector('#containerButtton');
                const newButton = document.createElement('button');
                newButton.textContent = 'New timer';
                newButton.classList.add('btnStyle');
                containerButtton.appendChild(newButton);
                newButton.addEventListener('click', () => {
                location.reload();
                })
            }
            
        }

        let timeID = setInterval(calculate, 1000);

    }






    
