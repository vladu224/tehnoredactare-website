interface AttemptRecord {
    count: number;
    firstAttempt: number;
}

const attemtps = new Map<string, AttemptRecord>();

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 5 * 60 * 1000; // 5m

export function rateLimitOk(identifier: string): boolean {
    const now = Date.now();
    const record = attemtps.get(identifier);

    if(!record || now - record.firstAttempt > WINDOW_MS) {
        attemtps.set(identifier, { count: 1, firstAttempt: now });
        return true;
    }

    if (record.count >= MAX_ATTEMPTS) {
        return false;
    }

    record.count += 1;
    return true;
}