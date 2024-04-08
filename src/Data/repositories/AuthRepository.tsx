interface IAuthAPI {
  login(username: string, password: string): Promise<any>; // Ajusta el tipo de retorno según corresponda
  register(userData: object): Promise<any>; // Ajusta los tipos de los parámetros y retorno según corresponda
  // Añade otros métodos según sean necesarios
}

class AuthRepository {
  private authAPI: IAuthAPI;
  constructor(authAPI: IAuthAPI) {
    this.authAPI = authAPI;
  }

  async login(
    username: string,
    password: string
  ): Promise<{ token: string; user: any }> {
    try {
      const { token, user } = await this.authAPI.login(username, password);
      return { token, user };
    } catch (error) {
      // Manejar errores, por ejemplo, credenciales incorrectas
      throw error;
    }
  }

  async logout() {
    // Aquí podrías invalidar el token en el backend o simplemente limpiar el almacenamiento local
  }

  // Implementar otros métodos según sea necesario
}
export { AuthRepository };
