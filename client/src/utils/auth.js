// Import decode from JWT
import decode from "jwt-decode";

// Set up Auth Service
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and if it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // If the token is not expired, then return true
      if (decoded.exp < Date.now() / 1000) {
        return true;
        // Otherwise, return false
      } else return false;
    } catch (err) {
      // Catch error and return false
      return false;
    }
  }
}

// Create a new class to set up a user

// Check if a user is logged in

// Check if token is expired

// Retrieve the user token from localStorage

// Saves user token to localStorage

// Clear user token and profile data from localStorage

// Export default new AuthService()
