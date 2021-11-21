var n = 5;
var pattern = "";
for (var i = 1; i <= n; i++) 
{
  for (var j = n; j > i; j--) {
    pattern += " ";
  }
  for (var k = 0; k < i * 2 - 1; k++)
   {
    pattern += "*";
  }
  pattern += "\n";
}
for (var i = 1; i <= n - 1; i++)
 {
  for (var j = 0; j < i; j++) 
  {
    pattern += " ";
  }
  for (var k = (n - i) * 2 - 1; k > 0; k--)
   {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
