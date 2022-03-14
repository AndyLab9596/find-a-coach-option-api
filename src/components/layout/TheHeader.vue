<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find Your Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/auth">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    &:hover,
    &:active,
    &.router-link-active {
      border: 1px solid #f391e3;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;

    h1 {
      margin: 0;
      a {
        color: #ffffff;
        margin: 0;

        &:hover,
        &:active,
        &.router-link-active {
          border: 1px solid transparent;
        }
      }
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        margin: 0 0.5rem;
      }
    }
  }
}
</style>
