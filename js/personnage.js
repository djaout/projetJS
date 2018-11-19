class personnage
{
	constructor(x,y,vitesseMarche,img)
	{
		this.x = x;
		this.y = y;
		this.direction = 0;
		this.vitesseMarche = vitesseMarche;
		this.img = new Image();
		this.img.src = img;
		this.incrementX = 0;
		this.incrementY = 0;
	}

	draw(ctx)
	{
		ctx.drawImage(this.img, this.x, this.y);
	}

	move(x,y)
	{
		this.x += (x*this.vitesseMarche);
		this.y += (y*this.vitesseMarche);
	}

	moveEnnemi(){
		this.x += this.vitesseMarche;
		this.y += this.vitesseMarche;
		//this.vitesseMarche = this.vitesseMarche * Math.random();
	}

	collisionEnnemi(){
		if(((this.x + 100) > 400) || this.x < 0)
			this.vitesseMarche = -this.vitesseMarche;
		if(((this.y + 10) > 500) || this.y < 0)
			this.vitesseMarche = -this.vitesseMarche

	}


}