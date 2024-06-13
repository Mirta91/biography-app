import { count } from '../stores/store.counter';

export function decrement() {
    count.update((n) => n - 1);
}

export function increment() {
    count.update((n) => n + 1);
}

export function reset() {
    count.set(0);
}