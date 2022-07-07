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
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves the user token to localStorage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  // Set up logout
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // This will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

// Export AuthService()
export default new AuthService();
