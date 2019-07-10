function Circle(x, y, radius) {
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius;
    World.add(world, this.body);


    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // para rodar os obj
        // usar o centro como ponto
        rotate(angle);
        imageMode(CENTER);
        // atribuir imagem ao obj
        image(img, 0, 0, this.radius * 2);
        pop();
    }
}