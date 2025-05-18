<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VaidhGPT – Trusted Chikitsa</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
  <style>
    body {
      background-color: #f5efe4;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    header {
      text-align: center;
      padding: 1rem;
    }

    header img {
      height: 60px;
      margin-bottom: 1rem;
    }

    .hero {
      text-align: center;
      padding: 2rem 1rem;
    }

    .hero img.doctor {
      max-width: 260px;
      border-radius: 1rem;
      margin-bottom: 1rem;
    }

    form {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 400px;
      margin: 1rem auto;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    .info-cards {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .info-cards article {
      background: white;
      padding: 1rem;
      border-radius: 0.75rem;
      width: 280px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      text-align: center;
    }

    #chat-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 320px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      z-index: 999;
      display: none;
      overflow: hidden;
    }

    #chat-header {
      background: #165f2e;
      color: white;
      text-align: center;
      padding: 0.5rem;
      font-weight: bold;
      font-size: 1rem;
    }

    #recaptcha-container {
      margin-top: 1rem;
    }
  </style>
</head>
<body>

  <header>
    <img src="https://drive.google.com/uc?export=view&id=1Nv8FOohbIYCWwDr6Eatc3pki3qKtv-0s" alt="VaidhGPT Logo" />
  </header>

  <main class="container">
    <section class="hero">
      <img class="doctor" src="https://drive.google.com/uc?export=view&id=1yqPfa-cLOm8d5fTGppRfs1_QhDx39pNQ" alt="VaidhGPT Doctor" />
      <h1>VaidhGPT. Real Conversations.<br />Shuddh Chikitsa.</h1>
      <p>Personalized Ayurvedic and Unani healing with VaidhGPT consultation</p>
    </section>

    <form id="otp-form">
      <h2 style="text-align:center;">Enter Your Details</h2>
      <input type="text" id="name" placeholder="Full Name" required />
      <input type="tel" id="mobile" placeholder="10-digit Mobile Number" maxlength="10" required />
      <div id="recaptcha-container"></div>
      <button type="button" id="send-otp">Send OTP</button>
      <input type="text" id="otp" placeholder="Enter OTP" style="margin-top: 1rem;" />
      <button type="submit">Verify</button>
    </form>

    <section>
      <h2 style="text-align: center;">Why VaidhGPT?</h2>
      <div class="info-cards">
        <article>
          <h3>Trusted Wisdom</h3>
          <p>Rooted in ancient Ayurvedic & Unani scriptures</p>
        </article>
        <article>
          <h3>Natural Approach</h3>
          <p>Herbal treatments tailored to your Dosh</p>
        </article>
        <article>
          <h3>Personalized Care</h3>
          <p>Mantra or Dua system, as per your belief</p>
        </article>
      </div>
    </section>
  </main>

  <!-- Chatbot -->
  <div id="chat-container">
    <div id="chat-header">VaidhGPT</div>
    <iframe src="/chatbot.html" style="width:100%; height:100%; border:none;"></iframe>
  </div>

  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>

  <!-- App Script -->
  <script>
    const firebaseConfig = {
      apiKey: "AIzaSyDFyzlvE9WpWdc5lYZny14v48L0mHkQxhM",
      authDomain: "vaidhgpt-371cd.firebaseapp.com",
      projectId: "vaidhgpt-371cd",
      storageBucket: "vaidhgpt-371cd.appspot.com",
      messagingSenderId: "950554047314",
      appId: "1:950554047314:web:26798dac4fefffefddc08b",
      measurementId: "G-WZ94058R3K"
    };

    firebase.initializeApp(firebaseConfig);
    let confirmationResult;

    document.addEventListener("DOMContentLoaded", function () {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: function(response) {
          console.log("Invisible reCAPTCHA verified ✅");
        },
        'expired-callback': function () {
          Swal.fire("Expired", "reCAPTCHA expired, please refresh.", "info");
        }
      });

      window.recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
      });

      document.getElementById("send-otp").onclick = function () {
        grecaptcha.reset(window.recaptchaWidgetId); // important: reset before every OTP send

        const phone = document.getElementById("mobile").value.trim();
        if (phone.length !== 10) {
          Swal.fire("Invalid", "Enter a valid 10-digit number", "warning");
          return;
        }

        const fullPhone = "+91" + phone;
        firebase.auth().signInWithPhoneNumber(fullPhone, window.recaptchaVerifier)
          .then(function (result) {
            confirmationResult = result;
            Swal.fire("OTP Sent!", "Check your mobile number for OTP.", "info");
          })
          .catch(function (error) {
            Swal.fire("Error", error.message, "error");
          });
      };

      document.getElementById("otp-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const otp = document.getElementById("otp").value.trim();
        if (!confirmationResult) {
          Swal.fire("Error", "Please send OTP first.", "error");
          return;
        }

        confirmationResult.confirm(otp)
          .then(function (result) {
            Swal.fire({
              title: 'OTP Verified!',
              text: 'VaidhGPT is ready to assist you.',
              icon: 'success',
              confirmButtonText: 'Start Chat'
            }).then(() => {
              document.getElementById("chat-container").style.display = "block";
            });
          })
          .catch(function (error) {
            Swal.fire("Invalid OTP", error.message, "error");
          });
      });
    });
  </script>
</body>
</html>
