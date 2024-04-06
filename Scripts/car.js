class Car {
    constructor(x,y,width,height) {
        this.x;
        this.y;
        this.width;
        this.height;

        this.controls = new Controls();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}