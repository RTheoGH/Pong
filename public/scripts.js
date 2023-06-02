function draw() {
    console.log("uwu");
    // const canvas = document.getElementById('casseb');
    // if (canvas.getContext) {
    //     const pad = canvas.getContext('2d');
    //     pad.fillRect(850,800,150,20);

    //     const carre = canvas.getContext('2d');
    //     for(let i=0;i<=1800;i+=75){
    //         for(let j=0;j<=400;j+=75){
    //             carre.fillRect(i,j,50,50);
    //         }
    //     }
    // }
    const svg = d3.select("#main");
    for(let i=0;i<30;i++){
        for(let j=0;j<10;j++){
            svg.append('rect')
            .attr('x', i*60)
            .attr('y', j*35)
            .attr('width', 50)
            .attr('height', 25)
            .attr('stroke', 'black')
            .attr('fill', 'green');
        }
    }
    let x=800;
    let y=850;
    let pad = svg.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', 150)
        .attr('height', 10)
        .attr('stroke', 'black')
        .attr('fill', 'gold');

    d3.select("body")
        .on("keydown", (event) => {
            if(event.keyCode == 37){
                console.log("gauche");
                if(x>0){
                    x-=20;
                    pad.attr('x',x);
                }
            } else if (event.keyCode == 39){
                console.log("droite");
                if(x<1570){
                    x+=20;
                    pad.attr('x',x);
                }
            }
        })

    svg.append('circle')
    .attr('r',10)
    .attr('cx',700)
    .attr('cy', 500)
    .attr('stroke', 'black')
    .attr('fill', 'white');
}

draw()