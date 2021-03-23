// 8. Write a function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let i = 2; i < n; i++)
    {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));