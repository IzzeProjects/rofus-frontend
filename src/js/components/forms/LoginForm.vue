<template>
    <div tabindex="0"
         class="modal-wrapper"
         data-form="login">
        <div class="modal-login">
            <div class="modal-wrapper__close js-modal-close" data-modal-close="login"></div>
            <div class="modal-wrapper__title">Вход</div>
            <form>
                <div class="modal-wrapper__form">
                    <div class="modal-wrapper-form__group">
                        <label for="login-email" class="required">Email:</label>
                        <input type="text" id="login-email" class="modal-wrapper-form__input">
                    </div>
                    <div class="modal-wrapper-form__group">
                        <label for="login-password" class="required">Пароль:</label>
                        <input type="password" id="login-password" class="modal-wrapper-form__input">
                    </div>
                    <button type="submit" class="modal-wrapper-form__button">Войти</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        props: ['url', 'method'],
        mounted() {
            console.log(this.url);
            console.log(this.method);
        }
    }
</script>
