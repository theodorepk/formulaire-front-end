document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("Envoyé");

      const response = await axios.post(
        "https://tpk-formulaire-back-end.herokuapp.com/form",
        {
          firstname: document.querySelector("#firstname").value,
          lastname: document.querySelector("#lastname").value,
          email: document.querySelector("#email").value,
          subject: document.querySelector("#subject").value,
          message: document.querySelector("#message").value,
        }
      );

      console.log("La réponse envoyée: ", response);
    });
});
