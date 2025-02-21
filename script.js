
var App = {
  $: {
    selectBtn: document.querySelectorAll("[data-js__select]"),
    closeBtn: document.getElementById("close__btn"),
    overallDisplay: document.querySelector(".overall__transformation__container"),
    heroContainer: document.querySelector(".container"),
    selectPage: document.querySelector(".select__reward__container"),
    backBtn: document.querySelector("[data-backBtn__js]"),
    supportBtn: document.querySelector("[data-js__support]"),
  },

  onClick() {
    this.$.closeBtn.addEventListener("click", (e) => {
      document.body.classList.remove("onClick__body");
      this.$.overallDisplay.classList.remove("opacity");
      this.$.heroContainer.classList.remove("opacity");
      this.$.selectPage.classList.add("hidden");
    }
    );

    this.$.backBtn.addEventListener("click", () => {
      this.$.selectPage.classList.remove("hidden");
      document.body.classList.add("onClick__body");
      this.$.overallDisplay.classList.add("opacity");
      this.$.heroContainer.classList.add("opacity");
    });

    var context = this;

    this.$.selectBtn.forEach(function ltems( item ) {
      item.addEventListener("click", function listen()  {
         context.$.supportBtn.classList.toggle("display__none"); 
         document.body.classList.toggle("onClick__body");
         this.$.heroContainer.classList.toggle("opacity");
      })
    })
  },

}

App.onClick();  