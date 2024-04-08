import axios from "axios";

class AuthAPI {
  axiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000", // La URL base de tu API
      timeout: 1000,
      // Aquí puedes configurar headers que sean comunes para todas las solicitudes
    });
  }

  async post(endpoint, data) {
    try {
      const response = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      // Puedes decidir cómo manejar errores aquí: lanzarlos de nuevo, manejarlos, etc.
      throw error;
    }
  }

  // Método para login
  async login(username, password) {
    return this.post("/login", { username, password });
  }

  // Método para registro
  async register(userData) {
    return this.post("/register", userData);
  }

  // Añade más métodos según sean necesarios para tu aplicación
}

export default new AuthAPI();
