class PrimeFaster {
    private static _instance: PrimeFaster;
    
    private constructor() {}
    
    public static get instance(): PrimeFaster {
        if (!PrimeFaster._instance) {
        PrimeFaster._instance = new PrimeFaster();
        }
        return PrimeFaster._instance;
    }

    public isPrime(n: number): boolean {
        if (n < 2) {
            return false;
        }
        if (n === 2) {
            return true;
        }
        if (n % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    public getPrimes(min: number, max: number): number[] {
        const result = Array(max + 1)
            .fill(0)
            .map((_, i) => i);
        for (let i = 2; i <= Math.sqrt(max + 1); i++) {
            for (let j = i ** 2; j < max + 1; j += i) delete result[j];
        }
        return Object.values(result.slice(Math.max(min, 2)));
    }
}

const primeFaster = PrimeFaster.instance;
export { primeFaster };
