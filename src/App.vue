<template>
  <div>
    
    <div class="banner">
      <img src="./Banner Calling Site.jpg" alt="A banner image">
    </div>

    <!-- Nav bar -->
    
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left">CALLING SITE</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Registrar Empleado</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Ver empleados</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <header class="flex flex-col col-start-2 col-span-3 p-10 bg-gray-100 text-center">
    <h1 id="title" class="mb-2 text-4xl">
      Registro de Empleados
    </h1>
    <p id="description" class="text-xl font-thin">
      Ingrese los datos del empleado
    </p>
    </header>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>


