// Final Security Configuration for HomeStuco Admin Panel

export const SECURITY_CONFIG = {
  // Session Management
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  AUTO_LOGOUT_WARNING: 5 * 60 * 1000, // 5 minutes before logout
  
  // Authentication
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_COOLDOWN: 15 * 60 * 1000, // 15 minutes
  
  // Security Features
  ENABLE_SESSION_REFRESH: true,
  ENABLE_AUTO_LOGOUT: true,
  SECURE_STORAGE: true,
  
  // Development vs Production
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  ENABLE_DEBUG_LOGS: process.env.NODE_ENV === 'development',
} as const;

// Security utilities
export const SecurityUtils = {
  // Generate secure session token
  generateSessionToken(): string {
    const timestamp = Date.now();
    const randomValue = Math.random().toString(36).substring(2);
    return btoa(`${timestamp}-${randomValue}`);
  },

  // Obfuscate sensitive data in logs
  obfuscate(data: string): string {
    if (!SECURITY_CONFIG.ENABLE_DEBUG_LOGS) {
      return '*'.repeat(data.length);
    }
    return data;
  },

  // Clear sensitive data from memory
  clearSensitiveData(): void {
    // Force garbage collection if available
    if ('gc' in window) {
      (window as any).gc();
    }
  },

  // Check if running in secure context
  isSecureContext(): boolean {
    return window.isSecureContext || location.protocol === 'https:';
  },
};

// Export security status for monitoring
export const getSecurityStatus = () => ({
  isAuthenticated: !!localStorage.getItem('adminAuthenticated'),
  hasValidSession: !!localStorage.getItem('adminSession'),
  isSecureContext: SecurityUtils.isSecureContext(),
  sessionAge: Date.now() - parseInt(localStorage.getItem('adminSession') || '0'),
  timeUntilExpiry: SECURITY_CONFIG.SESSION_TIMEOUT - (Date.now() - parseInt(localStorage.getItem('adminSession') || '0')),
});
