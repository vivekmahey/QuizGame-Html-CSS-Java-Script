    // Slider
    let queSlider = document.querySelectorAll('.ques');
        let prebtn = document.querySelector('.previous');
        let nextbtn = document.querySelector('.Next');
        let current = 0;
        prebtn.addEventListener('click', () => {
            current = current > 0 ? current - 1 : current;
            showslide();
        })
        nextbtn.addEventListener('click', () => {
            current = current < queSlider.length - 1 ? current + 1 : current;
            showslide();
        })
        queSlider.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        })
        function showslide() {
            queSlider.forEach((slide) => {
                slide.style.transform = `translateX(-${current * 100}%)`
            })
        }
        const questions = [
            { name: 'que1', correctans: 'C++' },
            { name: 'que2', correctans: 'Hypertext-Transfer-Protocol' },
            { name: 'que3', correctans: 'Stack' },
            { name: 'que4', correctans: ' Internet-Protocol' },
            { name: 'que5', correctans: 'Structured-Query-Language' },
        ]
        let score = 0;

        questions.forEach((ques, index) => {
            let options = document.getElementsByName(ques.name);
            const result = document.querySelectorAll('.result')[index];
            console.log(options);

            options.forEach((opt) => {
                opt.addEventListener('click', () => {
                
                    console.log('btn clicked')
                    console.log(opt.innerHTML)
                    if (opt.value == ques.correctans) {
                        score++;
                        setTimeout(() => {

                            result.innerHTML = ` <p> You Get 1 Score ! </p>`;
                        }, 1300);
                        result.style.color = "green";
                        result.style.fontSize="22px"
                        result.innerHTML = `<p>Correct Ans !!</p>`
                    }
                    else {
                        console.log("None Of These");
                        result.style.color = "red"
                         result.style.fontSize="22px"
                        setTimeout(() => {
                            result.innerHTML = `<p>Correct Ans is ${ques.correctans} </p>`;
                        }, 1300);
                        result.innerHTML = `<p>Wrong Answer</p>`;
                    }
                    totalscore();
                    disableOptions(options);
                })
            })
        })
        function totalscore() {
            let Total = document.querySelector('.grandtotal');
            Total.innerHTML = ` <h1>Quiz Game</h1><h3>Total Score:${score}`;
            Total.classList.remove("hide");
            }

        function disableOptions(options) {
            options.forEach(opt => {
                opt.disabled = true;
            });
        }
