//Rahul purchased items worth 4000, there is a deal of 10% discount if the bill is more than or equal to 3999, print "Got discount" if he is eligible else print "Not eligible".

let bill=4000;

let min_pur=3999;

if(bill>=min_pur){
  console.log("Got discount 10% =",bill-bill*0.1);
} else {
  console.log("Not Eligible");
}