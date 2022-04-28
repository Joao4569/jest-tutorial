function buttonClick() {
  document.getElementById("par").innerHTML = "You Clicked";
}

module.exports = async () => {
  return {
    verbose: true,
  };
};
module.exports = buttonClick;