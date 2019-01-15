class bank
{
    constructor(matt, mine, account1, account2,)
    {
        this.matt = matt;
        this.mine = mine;
        this.account1 = account1;
        this.account2 = account2;
        this.newBal1 = this.account1 - 100;
        this.newBal2 = this.account2 + 100;
    }
    print1()
    {
        console.log(this.matt + " starting balance is $" + this.account1 + " and " + this.mine + " starting balance is $" + this.account2);
    }
    print2()
    {
        console.log(this.matt + " new balance is $" + this.newBal1 + " and " + this.mine + " new balance is $" + this.newBal2);
    }

}

var movBank = new bank("Matt's account", "My account", 1000, 0);
movBank.print1();
movBank.print2();