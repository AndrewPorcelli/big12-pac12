function whatTeam(el) {
  let elementID = document.getElementById(el);

  for (let i = 0; i < elementID.length; i++) {
    if (elementID[i].selected === true) {
      let x = elementID[i].text;
      return x;
    }
  }
}

function evaluatePage() {
  let feedbackBig = whatTeam('big');
  let feedbackPac = whatTeam('pac');
  document.getElementById(
    'output'
  ).innerHTML = `<br> ${feedbackBig} <br> vs <br> ${feedbackPac}`;
}
