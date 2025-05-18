import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDFyzlvE9WpWdc5lYZny14v48L0mHkQxhM",
      authDomain: "vaidhgpt-371cd.firebaseapp.com",
      projectId: "vaidhgpt-371cd",
      storageBucket: "vaidhgpt-371cd.appspot.com",
      messagingSenderId: "950554047314",
      appId: "1:950554047314:web:26798dac4fefffefddc08b",
      measurementId: "G-WZ94058R3K"
    };

    if (typeof window !== 'undefined' && window.firebase && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);

      let confirmationResult;

      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: function (response) {
          console.log("Invisible reCAPTCHA verified ✅");
        },
        'expired-callback': function () {
          Swal.fire("Expired", "reCAPTCHA expired, please refresh.", "info");
        }
      });

      window.recaptchaVerifier.render().then(function (widgetId) {
        window.recaptchaWidgetId = widgetId;
      });

      document.getElementById("send-otp").onclick = function () {
        grecaptcha.reset(window.recaptchaWidgetId);

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
    }
  }, []);

  return (
    <>
      <Head>
        <title>VaidhGPT – Trusted Chikitsa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="beforeInteractive" />
      <Script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js" strategy="beforeInteractive" />
      <Script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js" strategy="beforeInteractive" />

      <header style={{ textAlign: "center", padding: "1rem" }}>
        <img
          src="https://drive.google.com/uc?export=view&id=1Nv8FOohbIYCWwDr6Eatc3pki3qKtv-0s"
          alt="VaidhGPT Logo"
          style={{ height: "60px", marginBottom: "1rem" }}
        />
      </header>

      <main className="container">
        <section className="hero" style={{ textAlign: "center", padding: "2rem 1rem" }}>
          <img
            className="doctor"
            src="https://drive.google.com/uc?export=view&id=1yqPfa-cLOm8d5fTGppRfs1_QhDx39pNQ"
            alt="VaidhGPT Doctor"
            style={{ maxWidth: "260px", borderRadius: "1rem", marginBottom: "1rem" }}
          />
          <h1>VaidhGPT. Real Conversations.<br />Shuddh Chikitsa.</h1>
          <p>Personalized Ayurvedic and Unani healing with VaidhGPT consultation</p>
        </section>

        <form id="otp-form" style={{
          background: "white", padding: "2rem", borderRadius: "1rem",
          maxWidth: "400px", margin: "1rem auto", boxShadow: "0 2px 15px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>
          <input type="text" id="name" placeholder="Full Name" required />
          <input type="tel" id="mobile" placeholder="10-digit Mobile Number" maxLength="10" required />
          <div id="recaptcha-container" style={{ marginTop: "1rem" }}></div>
          <button type="button" id="send-otp">Send OTP</button>
          <input type="text" id="otp" placeholder="Enter OTP" style={{ marginTop: "1rem" }} />
          <button type="submit">Verify</button>
        </form>

        <section>
          <h2 style={{ textAlign: "center" }}>Why VaidhGPT?</h2>
          <div className="info-cards" style={{
            display: "flex", justifyContent: "center", gap: "1rem",
            flexWrap: "wrap", marginTop: "2rem"
          }}>
            {[
              { title: "Trusted Wisdom", desc: "Rooted in ancient Ayurvedic & Unani scriptures" },
              { title: "Natural Approach", desc: "Herbal treatments tailored to your Dosh" },
              { title: "Personalized Care", desc: "Mantra or Dua system, as per your belief" }
            ].map((item, i) => (
              <article key={i} style={{
                background: "white", padding: "1rem", borderRadius: "0.75rem", width: "280px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)", textAlign: "center"
              }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div id="chat-container" style={{
        position: "fixed", bottom: "20px", right: "20px", width: "320px",
        height: "500px", background: "white", borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", zIndex: 999, display: "none", overflow: "hidden"
      }}>
        <div id="chat-header" style={{
          background: "#165f2e", color: "white", textAlign: "center",
          padding: "0.5rem", fontWeight: "bold", fontSize: "1rem"
        }}>
          VaidhGPT
        </div>
        <iframe src="/chatbot.html" style={{ width: "100%", height: "100%", border: "none" }}></iframe>
      </div>
    </>
  );
}
