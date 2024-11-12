<template>
   <header>
      <nav>
         <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/anime">Anime</NuxtLink></li>
         </ul>
      </nav>
      <main>
         <slot />
      </main>
   </header>
</template>
