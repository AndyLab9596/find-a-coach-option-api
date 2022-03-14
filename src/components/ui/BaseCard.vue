<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: 2rem auto;
    max-width: 40rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>