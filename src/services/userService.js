// services/userService.js

export async function fetchUsers() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      // const response = await fetch('172.28.210.53:8085/censo');
      console.log(response)

      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await response.json();
      console.log(data)
      return data.users;

    } 
    catch (error) {
      console.error(error);
      return [];
    }
  }

// export async function fetchUsers() {
//   try {
//     const response = await fetch('172.28.210.53:8085/censo'); // Ajusta la URL si es diferente
//     if (!response.ok) {
//       throw new Error(`Error en la solicitud: ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data)

//     // Validar si la respuesta es un array
//     if (!Array.isArray(data)) {
//       console.error("La respuesta de la API no es un array:", data);
//       return [];
//     }

//     return data; // Retorna la lista de usuarios directamente
//   } catch (error) {
//     console.error("Error al obtener los usuarios:", error);
//     return [];
//   }
// }

  
