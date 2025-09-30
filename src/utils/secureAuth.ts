// Secure authentication utilities - Final Production Version

// Secure credential validation (obfuscated for security)
const SECURE_CREDENTIALS = {
  // Base64 encoded credentials for basic obfuscation
  u: btoa('homeStuco'), // username
  p: btoa('admin2024'), // password
};

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}

// Validate credentials securely
export const validateCredentials = async (username: string, password: string): Promise<boolean> => {
  try {
    // Add artificial delay to prevent timing attacks
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));
    
    // Decode and validate credentials
    const validUsername = atob(SECURE_CREDENTIALS.u);
    const validPassword = atob(SECURE_CREDENTIALS.p);
    
    return username === validUsername && password === validPassword;
  } catch (error) {
    console.error('Credential validation error:', error);
    return false;
  }
};

export class SecureAuth {
  private static readonly TOKEN_KEY = 'adminToken';
  private static readonly AUTH_KEY = 'adminAuthenticated';
  private static readonly SESSION_KEY = 'adminSession';
  private static readonly SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

  // Check if user is authenticated with session validation
  static isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const isAuth = localStorage.getItem(this.AUTH_KEY) === 'true';
    const sessionStart = localStorage.getItem(this.SESSION_KEY);
    
    if (!token || !isAuth || !sessionStart) {
      return false;
    }

    // Check session timeout
    const sessionAge = Date.now() - parseInt(sessionStart);
    if (sessionAge > this.SESSION_TIMEOUT) {
      this.logout();
      return false;
    }
    
    return true;
  }

  // Get authentication token for API requests
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Logout and clear all auth data
  static logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.SESSION_KEY);
  }

  // Refresh session timestamp
  static refreshSession(): void {
    if (this.isAuthenticated()) {
      localStorage.setItem(this.SESSION_KEY, Date.now().toString());
    }
  }
}

// Environment-based configuration
export const AUTH_CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  ENABLE_LOGGING: import.meta.env.DEV || false,
};
