import Debug "mo:base/Debug";
actor DBank{
   stable var val:Nat=90;
    Debug.print("Hello World");
    Debug.print(debug_show(val));
    Debug.print("testing for orthogonal persistence");
    Debug.print("testing for orthogonal persistence");

    public func topup(amount: Nat)
    {
        var p="its a fucking wallet Where your wallet has : ";
        Debug.print(p);
        val+=amount;
        Debug.print(debug_show(val));

    };
    public func withDraw(amount:Nat)
    {
        var h="Your amount has been deducted and now its ";
        Debug.print(h);
        let tempCalc:Int=val-amount;
        Debug.print("JUst testing my orthogonal persistence");
        if(tempCalc >= 0) {
            val-=amount;
        Debug.print(debug_show(val));
        }
        else{
            Debug.print("Error the amount substraction is natural underflow");
        }
    };
    public query func readData(): async Nat{
        return val;
    };
}