 // number to text function 
function numToString(number) {
    //if not number
    if(typeof number !=='number'){
      if(/[^0-9]/.test(number)){
         return "Invalid Number";
      }

       number=parseFloat(number)
    }
    
    var ones = [
                "" 
                , "One"
                , "Two"
                , "Three"
                , "Four"
                , "Five"
                , "Six"
                , "Seven"
                , "Eight"
                , "Nine"
                , "Ten"
                , "Eleven"
                , "Twelve"
                , "Thirteen"
                , "Fourteen"
                , "Fifteen"
                , "Sixteen"
                , "Seventeen"
                , "Eighteen"
                , "Nineteen"
              ];
    var tens = [
                ""
                , ""
                , "Twenty"
                , "Thirty"
                , "Forty"
                , "Fifty"
                , "Sixty"
                , "Seventy"
                , "Eighty"
                , "Ninety"
              ];

    var cents = number - (Math.floor(number));
    cents = Math.round(cents * 100);

    var nbr = Math.floor(number);

    var tn = Math.floor(nbr / 1000000000000);
    nbr -= tn * 1000000000000;
    var bn = Math.floor(nbr / 1000000000);
    nbr -= bn * 1000000000;
    var gn = Math.floor(nbr / 1000000);
    nbr -= gn * 1000000;
    var kn = Math.floor(nbr / 1000);
    nbr -= kn * 1000;
    var hn = Math.floor(nbr / 100);
    nbr -= hn * 100;
    var dn = Math.floor(nbr / 10);
    nbr -= dn * 10;
    var n = nbr % 10;

    var res = "";
    if(tn) {
      res += (res.length == 0 ? "" : " ") + numToString(tn) + " Trillion";
    }
    if(bn) {
      res += (res.length == 0 ? "" : " ") + numToString(bn) + " Billion";
    }
    if(gn) {
      res += (res.length == 0 ? "" : " ") + numToString(gn) + " Million";
    }
    if(kn) {
      res += (res.length == 0 ? "" : " ") + numToString(kn) + " Thousand";
    }
    if(hn) {
      res += (res.length == 0 ? "" : " ") + numToString(hn) + " Hundred";
    }

    if(dn || n) {
      if(res.length > 0) {
        res += " ";
      }
      if(dn < 2) {
        res += ones[dn * 10 + n];
      }
      else {
        res += tens[dn];
        if(n) {
          res += " " + ones[n];
        }
      }
    }

    if(cents) {
      res += (res.length == 0 ? "" : " and ") + cents + "/100";
    } 

    if(res.length == 0) {
      res = "Zero";
    }
    return res;
  }


  module.exports={
    toString:numToString,
    toStringAsync:function(number,cb){
      cb(numToString(number))
    }
  }