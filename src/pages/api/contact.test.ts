import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { APIContext } from 'astro';

// Mock dependencies before importing
vi.mock('@neondatabase/serverless', () => ({
  neon: vi.fn(() => vi.fn()),
}));

// Mock Resend module
vi.mock('resend', () => ({
  Resend: class {
    constructor() {
      // @ts-ignore
      this.emails = { send: vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null }) };
    }
  },
}));

describe('contact API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('NEON_DATABASE_URL', 'postgresql://test:test@localhost/test');
    vi.stubEnv('RESEND_API_KEY', 'test-api-key');
    vi.stubEnv('EMAIL_FROM', 'noreply@test.com');
    vi.stubEnv('EMAIL_TO', 'contact@test.com');
  });

  const createMockContext = (formData: FormData): any => ({
    request: {
      formData: vi.fn().mockResolvedValue(formData),
    } as unknown as Request,
  });

  it('should return 400 when required fields are missing', async () => {
    const { POST } = await import('./contact');
    const mockContext = createMockContext(new FormData());

    const response = await POST(mockContext);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('All fields are required');
  });

  it('should return 200 when all fields are provided', async () => {
    const { POST } = await import('./contact');
    const { sql } = await import('../../lib/neon');

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('subject', 'Test Subject');
    formData.append('message', 'Test Message');

    const mockContext = createMockContext(formData);

    vi.mocked(sql).mockResolvedValue([]);

    const response = await POST(mockContext);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe('Message sent successfully');
  });

  it('should store submission in database', async () => {
    const { POST } = await import('./contact');
    const { sql } = await import('../../lib/neon');

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('subject', 'Test Subject');
    formData.append('message', 'Test Message');

    const mockContext = createMockContext(formData);

    vi.mocked(sql).mockResolvedValue([]);

    await POST(mockContext);

    expect(sql).toHaveBeenCalled();
  });

  it('should return 500 on database error', async () => {
    const { POST } = await import('./contact');
    const { sql } = await import('../../lib/neon');

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('subject', 'Test Subject');
    formData.append('message', 'Test Message');

    const mockContext = createMockContext(formData);

    vi.mocked(sql).mockRejectedValue(new Error('Database error'));

    const response = await POST(mockContext);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Failed to send message');
  });
});
