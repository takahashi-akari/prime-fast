import { primeFaster } from '../index';

describe('primeFaster', () => {
    it('should return true for prime numbers', () => {
        expect(primeFaster.isPrime(2)).toBe(true);
        expect(primeFaster.isPrime(3)).toBe(true);
        expect(primeFaster.isPrime(5)).toBe(true);
        expect(primeFaster.isPrime(7)).toBe(true);
        expect(primeFaster.isPrime(11)).toBe(true);
        expect(primeFaster.isPrime(13)).toBe(true);
        expect(primeFaster.isPrime(17)).toBe(true);
        expect(primeFaster.isPrime(19)).toBe(true);
        expect(primeFaster.isPrime(23)).toBe(true);
        expect(primeFaster.isPrime(29)).toBe(true);
        expect(primeFaster.isPrime(31)).toBe(true);
        expect(primeFaster.isPrime(37)).toBe(true);
        expect(primeFaster.isPrime(41)).toBe(true);
        expect(primeFaster.isPrime(43)).toBe(true);
        expect(primeFaster.isPrime(47)).toBe(true);
        expect(primeFaster.isPrime(53)).toBe(true);
        expect(primeFaster.isPrime(59)).toBe(true);
        expect(primeFaster.isPrime(61)).toBe(true);
        expect(primeFaster.isPrime(67)).toBe(true);
        expect(primeFaster.isPrime(71)).toBe(true);
        expect(primeFaster.isPrime(73)).toBe(true);
        expect(primeFaster.isPrime(79)).toBe(true);
        expect(primeFaster.isPrime(83)).toBe(true);
        expect(primeFaster.isPrime(89)).toBe(true);
        expect(primeFaster.isPrime(97)).toBe(true);
        expect(primeFaster.isPrime(101)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
        expect(primeFaster.isPrime(1)).toBe(false);
        expect(primeFaster.isPrime(4)).toBe(false);
        expect(primeFaster.isPrime(6)).toBe(false);
        expect(primeFaster.isPrime(8)).toBe(false);
        expect(primeFaster.isPrime(9)).toBe(false);
        expect(primeFaster.isPrime(10)).toBe(false);
        expect(primeFaster.isPrime(12)).toBe(false);
        expect(primeFaster.isPrime(14)).toBe(false);
        expect(primeFaster.isPrime(15)).toBe(false);
        expect(primeFaster.isPrime(16)).toBe(false);
        expect(primeFaster.isPrime(18)).toBe(false);
        expect(primeFaster.isPrime(20)).toBe(false);
        expect(primeFaster.isPrime(21)).toBe(false);
        expect(primeFaster.isPrime(22)).toBe(false);
        expect(primeFaster.isPrime(24)).toBe(false);
        expect(primeFaster.isPrime(25)).toBe(false);
        expect(primeFaster.isPrime(26)).toBe(false);
        expect(primeFaster.isPrime(27)).toBe(false);
        expect(primeFaster.isPrime(28)).toBe(false);
        expect(primeFaster.isPrime(30)).toBe(false);
        expect(primeFaster.isPrime(32)).toBe(false);
        expect(primeFaster.isPrime(33)).toBe(false);
        expect(primeFaster.isPrime(34)).toBe(false);
        expect(primeFaster.isPrime(35)).toBe(false);
        expect(primeFaster.isPrime(36)).toBe(false);
        expect(primeFaster.isPrime(38)).toBe(false);
        expect(primeFaster.isPrime(39)).toBe(false);
        expect(primeFaster.isPrime(40)).toBe(false);
        expect(primeFaster.isPrime(42)).toBe(false);
        expect(primeFaster.isPrime(44)).toBe(false);
        expect(primeFaster.isPrime(45)).toBe(false);
        expect(primeFaster.isPrime(46)).toBe(false);
        expect(primeFaster.isPrime(48)).toBe(false);
        expect(primeFaster.isPrime(49)).toBe(false);
        expect(primeFaster.isPrime(50)).toBe(false);
    });

    it('should return the correct list of primes1', () => {
        expect(primeFaster.getPrimes(0, 100)).toEqual([
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
        ]);
    });

    it('should return the correct list of primes2', () => {
        expect(primeFaster.getPrimes(25, 75)).toEqual([
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
        ]);
    });

    it('should return the correct list of primes3', () => {
        expect(primeFaster.getPrimes(100, 200)).toEqual([
            101,
            103,
            107,
            109,
            113,
            127,
            131,
            137,
            139,
            149,
            151,
            157,
            163,
            167,
            173,
            179,
            181,
            191,
            193,
            197,
            199,
        ]);
    })

    it('should return the correct list of primes4', () => {
        expect(primeFaster.getPrimes(200, 300)).toEqual([
            211,
            223,
            227,
            229,
            233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
        ]);
    });

    it('should return the correct list of primes5', () => {
        expect(primeFaster.getPrimes(300, 400)).toEqual([
            307,
            311,
            313,
            317,
            331,
            337,
            347,
            349,
            353,
            359,
            367,
            373,
            379,
            383,
            389,
            397,
        ]);
    });

    it('should return the correct list of primes6', () => {
        expect(primeFaster.getPrimes(400, 500)).toEqual([
            401,
            409,
            419,
            421,
            431,
            433,
            439,
            443,
            449,
            457,
            461,
            463,
            467,
            479,
            487,
            491,
            499,
        ]);
    });

    it('should return the correct list of primes7', () => {
        expect(primeFaster.getPrimes(500, 600)).toEqual([
            503,
            509,
            521,
            523,
            541,
            547,
            557,
            563,
            569,
            571,
            577,
            587,
            593,
            599,
        ]);
    });

    it('should return the correct list of primes8', () => {
        expect(primeFaster.getPrimes(600, 700)).toEqual([
            601,
            607,
            613,
            617,
            619,
            631,
            641,
            643,
            647,
            653,
            659,
            661,
            673,
            677,
            683,
            691,
        ]);
    });

    it('should return the correct list of primes9', () => {
        expect(primeFaster.getPrimes(700, 800)).toEqual([
            701,
            709,
            719,
            727,
            733,
            739,
            743,
            751,
            757,
            761,
            769,
            773,
            787,
            797,
        ]);
    });

    it('should return the correct list of primes10', () => {
        expect(primeFaster.getPrimes(800, 900)).toEqual([
            809,
            811,
            821,
            823,
            827,
            829,
            839,
            853,
            857,
            859,
            863,
            877,
            881,
            883,
            887,
        ]);
    });

    it('should return the correct list of primes11', () => {
        expect(primeFaster.getPrimes(900, 1000)).toEqual([
            907,
            911,
            919,
            929,
            937,
            941,
            947,
            953,
            967,
            971,
            977,
            983,
            991,
            997,
        ]);
    });

    it('should return the correct list of primes12', () => {
        expect(primeFaster.getPrimes(1000, 1100)).toEqual([
            1009,
            1013,
            1019,
            1021,
            1031,
            1033,
            1039,
            1049,
            1051,
            1061,
            1063,
            1069,
            1087,
            1091,
            1093,
            1097,
        ]);
    });

    describe('benchmark', () => {
        it('should be fast', () => {
            const start = new Date().getTime();
            primeFaster.getPrimes(0, 1000000);
            const end = new Date().getTime();
            console.log("Calculating primes from 0 to 1000000");
            console.log(`Time: ${end - start}ms`);

            expect(end - start).toBeLessThan(1000);
        });
    });
});


