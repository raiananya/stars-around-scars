var msg = [
  "You have faced challenges before and come out stronger. I know you can do it again.🌻",
  "It's okay to feel down sometimes. Take your time, and I will be here to support you.🌻",
  "Remember that setbacks are just temporary. You have the resilience to bounce back🌻",
  "You are valued and appreciated. Your presence makes a difference in this world.🌻",
  "I'm here for you. You're not alone in this.🌻",
  "I believe in you and your strength to overcome this.🌻",
  "Focus on the positive things in your life. There are still good things to come.🌻",
  "Don't forget to take care of yourself. Self-care is essential for your well-being.🌻",
  "Even on the darkest days, there is always a glimmer of hope. Hold onto that.🌻",
  "You are so loved, and your happiness matters to those around you.🌻",
  "You are loved, and your happiness matters. We're in this together.🌻",
  "It's okay to not be okay. Take your time and be gentle with yourself.🌻",
  "I appreciate and value you. You make a positive difference in my life and the lives of others.🌻",
  "You are not alone in this. I'm here to listen, offer a helping hand, or provide a shoulder to lean on.🌻",
  "I'm here for you, and I'll support you every step of the way.🌻",
  "The world is a better place with you in it. Don't ever forget how much you matter.🌻",
  "I'm proud of you for how far you've come, and I know you have the strength to keep going.🌻",
  "You have a beautiful spirit that can shine through even the darkest moments.🌻",
  "Take it one day at a time. Progress may be slow, but every small step forward counts.🌻",
  "I'm grateful to have you in my life, and I'm confident that brighter days are ahead for you.🌻",
  "You are worthy of love, happiness, and all the good things that life has to offer.🌻",
];
function newQuote() {
  var randomNumber = Math.floor(Math.random() * msg.length);
  document.getElementById("quoteDisplay").innerHTML = msg[randomNumber];
  document.getElementById("my-button").innerHTML = "one more?";
}
window.addEventListener("load", function () {
  var coverPage = document.getElementById("cover-page");
  var mainContent = document.getElementById("main-content");
  coverPage.style.transform = "translateY(-100%)";
  setTimeout(function () {
    mainContent.style.opacity = 1;
  }, 1000);
});
