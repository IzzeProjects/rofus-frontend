<template>
    <div class="full-description-container"
         v-show="show">
        <div class="man-info-container">
            <div class="man-info">
                <div class="man-main-info-container">

                    <div class="man-main-info">
                        <div class="man-fio">
                            <span>Александра Иванченко</span>
                        </div>
                        <div class="man-age">
                            <span>Возраст: 18</span>
                        </div>
                        <div class="man-city">
                            <span>Город: Москва</span>
                        </div>
                    </div>
                    <div class="man-society-info">
                        <div class="man-society-instagram">
                            <img src="https://images.vexels.com/media/users/3/131142/isolated/preview/42686c238da2892da4bdea221bada9a6-instagram-flat-icon-by-vexels.png"
                                 alt="" class="man-society-img">
                            <p class="man-society-name">Вконтакте</p>
                            <a href="vk.com" class="man-society-url">vk.com</a>
                        </div>
                        <div class="man-society-vk">
                            <img src="https://images.vexels.com/media/users/3/131142/isolated/preview/42686c238da2892da4bdea221bada9a6-instagram-flat-icon-by-vexels.png"
                                 alt="" class="man-society-img">
                            <p class="man-society-name">Instagram</p>
                            <a href="vk.com" class="man-society-url">vk.com</a>
                        </div>
                        <div class="man-society-facebook">
                            <img src="https://images.vexels.com/media/users/3/131142/isolated/preview/42686c238da2892da4bdea221bada9a6-instagram-flat-icon-by-vexels.png"
                                 alt="" class="man-society-img">
                            <p class="man-society-name">Facebook</p>
                            <a href="vk.com" class="man-society-url">vk.com</a>
                        </div>
                    </div>

                </div>
                <div class="man-additional-info">
                    <div class="man-additional-info-header-container">
                        <span class="man-additional-info-header-text">О себе:</span>
                    </div>
                    <div class="man-additional-info-text-container">
                        <span class="man-additional-info-text">
                            Можно использовать и вычисляемые свойства, возвращающие объекты стилей.  Использование массивов Запись v-bind:style с массивом позволяет применить несколько объектов стилей к одному и тому же элементу:
                                Автоматические префиксы При использовании в v-bind:style свойств CSS, требующих указания вендорных префиксов, Vue автоматически определит это и добавит подходящие префиксы к применяемым стилям.  Множественные значения Добавлено в версии 2.3.0+  Начиная с версии 2.3.0+ можно предоставить массив из нескольких (префиксных) значений для свойства style, например:
                        </span>
                    </div>
                </div>
            </div>
            <div class="man-images-slider"></div>
        </div>
        <div class="profile-container-full-description">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-image"
                     :style="{backgroundImage: 'url(' + info.image + ')'}">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                info: {},
            }
        },
        mounted() {
            this.$root.$on('selectedCard', (elem) => {
                this.show = true
                this.info = elem
            })
        },
        name: "FullDescription"
    }
</script>
