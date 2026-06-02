console.log("scenario manager loaded");
let activeScenario = null;

function startScenario(){
  console.log("starting scenario");

  activeScenario =
    scenarios[
      Math.floor(
        Math.random() *
        scenarios.length
      )
    ];
  console.log(activeScenario);

  const banner =
    document.getElementById(
      "scenarioBanner"
    );

  banner.innerHTML = `
    <h2 class="text-xl font-bold">
      ${activeScenario.name}
    </h2>

    <p class="text-slate-200">
      ${activeScenario.description}
    </p>
  `;
}
