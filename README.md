# prime-faster-ts
A faster prime number generator in TypeScript

## Usage

```ts
import { primeFaster } from 'prime-faster-ts';

const primes = primeFaster.getPrimes(0, 10000);
console.log(primes);

const n = 1000;
if (primeFaster.isPrime(n)) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
}
```

## Benchmark and Test

```bash
$ npm run test
```


## License
MIT License © 2022 [Takahashi Akari](https://github.com/takahashi-akari)
