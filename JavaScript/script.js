window.addEventListener("scroll", function() {
    let hero = document.getElementById("hero");
    let nextSection = document.querySelector("main");
    // Hämta avståndet från toppen av main till viewportens topp
    let distance = nextSection.getBoundingClientRect().top;
    
    // Definiera maximala och minimala höjder i vh för hero
    const maxHeight = 70; // hero har 70vh vid ingen scroll
    const minHeight = 10; // hero krymper inte under 30vh
    
    // Bestäm en ratio baserat på avståndet. Du kan justera multiplikatorn för att få önskad effekt.
    // Exempel: om distance är lika med window.innerHeight * 0.7 (70% av fönstret) så ska hero vara maxHeight.
    let ratio = Math.min(1, distance / (window.innerHeight * 0.7));
    
    // Beräkna ny höjd: när ratio = 1 → maxHeight, när ratio = 0 → minHeight.
    let newHeight = minHeight + (maxHeight - minHeight) * ratio;
    
    // Sätt den nya höjden
    hero.style.height = newHeight + "vh";
  });
  