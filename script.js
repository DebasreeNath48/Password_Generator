class Password {
  constructor() {
    console.log("Welcome to Password Generator")
    this.pass = ""
  }
  generatePass(len) {
    this.pass = ""
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let special = "!@#$%^&*()"
    if (len < 4) {
      console.log("Your password should be atleast 4 characters long")
    }

    else {
      let i = 0
      while (i <= len) {
        this.pass += chars[Math.floor(Math.random() * chars.length)]
        this.pass += numbers[Math.floor(Math.random() * numbers.length)]
        this.pass += special[Math.floor(Math.random() * special.length)]
        i = i + 3
      }
      this.pass = this.pass.substr(0, len) //cuts the string upto the length which user wants
    }
    return this.pass
  }
}


    let p = new Password();

    document.getElementById("password-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const passwordLength = parseInt(document.getElementById("password-length").value);
      if (passwordLength < 4) {
        document.getElementById("Generated-password").textContent = "Your password should be at least 4 characters long";
      } else {
        const generatedPassword = p.generatePass(passwordLength);
        document.getElementById("Generated-password").innerHTML = "Generated Password: <br>" + generatedPassword;
      }
      // Enable the copy and refresh buttons
      const copyButton = document.getElementById("copy-button");
      const refreshButton = document.getElementById("refresh-button");
      copyButton.disabled = false;
      refreshButton.disabled = false;
    });

    document.getElementById("copy-button").addEventListener("click", function() {
      const generatedPasswordElement = document.getElementById("Generated-password");
      const generatedPassword = generatedPasswordElement.textContent.split(":")[1].trim();

      const textarea = document.createElement("textarea");
      textarea.value = generatedPassword;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      // Update copy button text
      const copyButton = document.getElementById("copy-button");
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy to Clipboard";
      }, 2000); 
    });

    document.getElementById("refresh-button").addEventListener("click", function() {
      p.pass = "";
      document.getElementById("Generated-password").textContent = "";
      document.getElementById("password-length").value = "";
      document.getElementById("copy-button").disabled = true;
      document.getElementById("refresh-button").disabled = true;
    });