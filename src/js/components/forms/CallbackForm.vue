<template>
    <div tabindex="0"
         class="modal-wrapper"
         data-form="callback">
        <div class="modal-login">
            <div class="modal-wrapper__close js-modal-close" data-modal-close="callback"></div>
            <div class="modal-wrapper__title">Обратный звонок</div>
            <form>
                <div class="modal-wrapper__form">
                    <div class="modal-wrapper-form__group">
                        <label for="callback-email" class="required">Телефон:</label>
                        <input type="text" id="callback-email" class="modal-wrapper-form__input">
                    </div>
                    <div class="modal-wrapper-form__group">
                        <label for="callback-password">Email:</label>
                        <input type="password" id="callback-password" class="modal-wrapper-form__input">
                    </div>
                    <button type="submit" class="modal-wrapper-form__button">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CallbackForm",
        props: ['url', 'method'],
        mounted() {
            console.log(this.url);
            console.log(this.method);
        }
    }
</script>
