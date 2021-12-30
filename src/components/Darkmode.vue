<template>
    <div class="rounded-lg flex bg-gray-600 items-center justify-center mx-auto absolute top-1 right-0 left-3/3 mt-2 mr-2 z-50">
        <span class="text-md font-extralight">
            <i class="fas fa-sun"></i>
        </span>
        <div>
            <input class="hidden" id="checkbox" name="" type="checkbox"/>
            <label class="cursor-pointer" for="checkbox">
                <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
                    <div class="w-4 h-4 bg-white rounded-full shadow switch-ball"></div>
                </div>
            </label>
        </div>
        <span class="text-xs font-semibold">
            <i class="fas fa-moon"></i>
        </span>
    </div>
</template>

<script>

export default {
  name: 'Darkmode',
  props: {
    msg: String,
  },
};

</script>

<style>
.fas {
  margin:1em;
}

#checkbox:checked + label .switch-ball{
background-color: #282828;
transform: translateX(19px);
transition: transform 0.3s linear;
z-index:999999999;
}
</style>
