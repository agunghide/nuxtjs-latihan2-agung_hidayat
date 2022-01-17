<template>
    <div class="w-full bg-white rounded-2xl shadow-md overflow-hidden">
        <div class="w-full overflow-hidden" id="banner">
            <img class="object-cover min-h-100 w-full hover:scale-110 transition-transform duration-300 ease-in-out" src="https://picsum.photos/150/150" alt="banner">
        </div>
        <div id="content" class="px-[25px] py-[16px]">
            <div id="header">
                <h5 class="font-bold text-[24px] text-primary">{{ data.title }}</h5>
                <p class="text-gray-400 text-[16px] mt-[6px]">{{ data.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        data: {
            type: Object,
            required: true 
        },
    },
}
</script>