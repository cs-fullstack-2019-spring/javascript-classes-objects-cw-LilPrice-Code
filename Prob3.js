class person
{
    constructor(name, weight, height, BMI)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.BMI = this.weight/(this.height * this.height)*703;
    }
    print()
    {
        console.log(this.name + " is " + this.height + " inches tall and weights " + this.weight + " pounds with BMI of " + this.BMI);
    }
}
var newperson = new person("John", 205, 64);
newperson.print();