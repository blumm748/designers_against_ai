
  const form = document.getElementById('form');
  const result = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      result.innerHTML = "Successfully submitted :)";
      form.reset();
    } else {
      result.innerHTML = "Something went wrong. Please try again :(";
    }
  });

