export function viewHome() {
  return `
  <body class="bg-gray-100 min-h-screen flex">

    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-lg hidden md:block">
      <div class="p-6 border-b">
        <h1 class="text-xl font-bold text-indigo-600">AdminPanel</h1>
      </div>
      <nav class="mt-6">
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-100 hover:text-indigo-600 font-medium">Dashboard</a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-100 hover:text-indigo-600 font-medium">Usuarios</a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-100 hover:text-indigo-600 font-medium">Productos</a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-100 hover:text-indigo-600 font-medium">Configuración</a>
      </nav>
    </aside>

    <!-- Contenido Principal -->
    <div class="flex-1 flex flex-col">
      <!-- Encabezado -->
      <header class="bg-white shadow px-6 py-4 flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-800">Dashboard</h2>
        <div class="flex items-center gap-4">
          <span class="text-gray-700 font-medium">Admin</span>
          <img src="https://i.pravatar.cc/300" class="w-10 h-10 rounded-full border" alt="Avatar" />
        </div>
      </header>

      <!-- Contenido -->
      <main class="p-6 bg-gray-100 flex-1">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-lg font-semibold mb-2">Total Ventas</h3>
            <p class="text-2xl text-indigo-600 font-bold">$12,400</p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-lg font-semibold mb-2">Usuarios Activos</h3>
            <p class="text-2xl text-indigo-600 font-bold">1,234</p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow">
            <h3 class="text-lg font-semibold mb-2">Nuevos Registros</h3>
            <p class="text-2xl text-indigo-600 font-bold">87</p>
          </div>
        </div>

        <div class="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 class="text-xl font-bold mb-4">Últimos movimientos</h3>
          <table class="min-w-full table-auto">
            <thead>
              <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">Usuario</th>
                <th class="py-3 px-6 text-left">Actividad</th>
                <th class="py-3 px-6 text-center">Fecha</th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr class="border-b hover:bg-gray-50">
                <td class="py-3 px-6">Juan Pérez</td>
                <td class="py-3 px-6">Actualizó su perfil</td>
                <td class="py-3 px-6 text-center">2025-07-27</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="py-3 px-6">Luisa Gómez</td>
                <td class="py-3 px-6">Registró un producto</td>
                <td class="py-3 px-6 text-center">2025-07-26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>`}