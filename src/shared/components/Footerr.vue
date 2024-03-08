<template>
<footer>
    <p> Stylerus -<span> Copyright © {{new Date().getFullYear()}}</span> </p>
</footer>
</template>

<script setup>

</script>

<style scoped>
p{
    font-size: 0.9rem;
    font-weight: bold;
}
    footer{
        display : flex;
        justify-content : center ;
        align-items : center;
        height : 5vh;
        width: 100%;
        background-color: #393E46;
        color: aliceblue;
    }
    @media screen and (max-width: 710px) {
        p{
            font-size: 0.7rem;
        }
    }
</style>
