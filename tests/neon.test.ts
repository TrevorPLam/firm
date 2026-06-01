import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock the neon module at the top level
vi.mock('@neondatabase/serverless', () => ({
  neon: vi.fn(() => vi.fn()),
}));

describe('neon client', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('NEON_DATABASE_URL', 'postgresql://test:test@localhost/test');
  });

  it('should export sql client', async () => {
    const { sql } = await import('../src/lib/neon');

    expect(sql).toBeDefined();
    expect(typeof sql).toBe('function');
  });
});
