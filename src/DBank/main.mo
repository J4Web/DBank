import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor DBank{

   stable var val:Float=90;
   val:=100;
   stable var startTime=Time.now();
    Debug.print("Hello World");
    Debug.print(debug_show(val));
    Debug.print("testing for orthogonal persistence");
    public func topup(amount: Float)
    {
        var p="its a fucking wallet Where your wallet has : ";
        Debug.print(p);
        val+=amount;
        Debug.print(debug_show(val));

    };
    public func withDraw(amount:Float)
    {
        var h="Your amount has been deducted and now its ";
        Debug.print(h);
        let tempCalc: Float=val-amount;
        Debug.print("JUst testing my orthogonal persistence");
        if(tempCalc >= 0) {
            val-=amount;
        Debug.print(debug_show(val));
        }
        else{
            Debug.print("Error the amount substraction is natural underflow");
        }
    };
    public query func readData(): async Float{
        return val;
    };
    public func compound()
    {
        var currTime=Time.now();
        let timeElapsedInnn=(currTime-startTime);
        let timeElapsedInSecs=(timeElapsedInnn/1000000000);
        let power:Float=1.01 ** Float.fromInt(timeElapsedInSecs);
        val:=val*power;
        startTime:=currTime;
        Debug.print(debug_show(val));
    };
}