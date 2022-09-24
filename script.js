document.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const inputValue = document.getElementById("value").value;
      if (!inputValue) {
            return;
      }


      const randomNumber = randomNumberGenerator();
      if (Number(inputValue) === randomNumber) {
            document.getElementById("result").innerHTML = "Your Guess Number";
      }
      else {
            document.getElementById("result").innerHTML = "You lose. Actual number is " + randomNumber;

            if (Number(inputValue) + 10 > randomNumber) {
                  document.getElementById("message").innerHTML = "Correct answer is greater!";

            }
            else if (Number(inputValue) - 10 < randomNumber) {
                  document.getElementById("message").innerHTML = "Correct answer is lower!";

            }
      }
};

const randomNumberGenerator = () => {
      const number = Math.floor(Math.random() * 100);
      return number;


};