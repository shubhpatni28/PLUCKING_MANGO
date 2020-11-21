class Tree{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

		var options={
			isStatic:true
		}
		
		this.image=loadImage("tree.png")

		
		this.body = Bodies.rectangle(x, y, 500,600,options); 
		World.add(world,this.body)  

	}
	display()
	{
		//	var posBottom=this.bottomBody.position;
			push()
			translate(this.body.position.x, this.body.position.y);
			fill(255)
			imageMode(CENTER);
			image(this.image,this.x,this.y,500,600)
		///	rect(this.body.position.x,this.body.position.y,this.width,this.height);
						pop();
			
	}

}