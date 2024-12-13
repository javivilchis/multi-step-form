<template>
    <div class="message">
        <img src="../assets/images/icon-thank-you.svg" :alt="message.header">
        <h1>{{ message.header }}</h1>
        <p>{{ message.messageText }}</p>
    </div>
</template>

<script setup>
const message = {
    header: "Thank You!",
    messageText: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@app-sense.com"
}
</script>
