// src/utils/config.ts
export const salvarAdministrador = () => {
    const usuarioAdmin = {
      email: "pedro@admin.com",
      senha: "123",
      nome: "Administrador",
      isAdmin: true,
    };
    localStorage.setItem("usuarioAdmin", JSON.stringify(usuarioAdmin));
  };
  
  salvarAdministrador(); // Chama a função para salvar o administrador
  