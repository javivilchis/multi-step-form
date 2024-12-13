<template>
    <div class="steps" >
        <div class="dot">{{stepProp.id}}</div>
        <div class="dot-details">
            <span>{{stepProp.title}}</span>
            <p>{{stepProp.stepTitle}}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        stepProp: Object
    })
</script>
