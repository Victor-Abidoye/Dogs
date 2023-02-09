<template>
    <div class="grid min-h-screen -translate-y-20 place-items-center">
        <div class="text-center grid gap-2">
            <h1 class="font-bold text-2xl lg:text-5xl">404</h1>
            <P class="font-semibold">Hey Doggy</P>
            <div>
                <p class="text-sm text-red-500">There was an error loading this Dog Details</p>
                <p class="text-sm text-red-500">or this is probably a broken link</p>
            </div>
            <router-link to="/" class="text-blue-700 underline">Click here to go home</router-link>
        </div>
    </div>
</template>