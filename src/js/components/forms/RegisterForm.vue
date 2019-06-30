<template>
    <div tabindex="0"
         class="modal-wrapper"
         data-form="register">
        <div class="modal-login">
            <div class="modal-wrapper__close js-modal-close" data-modal-close="register"></div>
            <div class="modal-wrapper__title">Регистрация</div>
            <form>
                <div class="modal-wrapper__form">
                    <div class="modal-wrapper-form__group">
                        <label for="register-email" class="required">Email:</label>
                        <input type="text" id="register-email" class="modal-wrapper-form__input">
                    </div>
                    <div class="modal-wrapper-form__group">
                        <label for="register-name">Имя:</label>
                        <input type="text" id="register-name" class="modal-wrapper-form__input">
                    </div>
                    <div class="modal-wrapper-form__group">
                        <label for="register-password" class="required">Пароль:</label>
                        <input type="password" id="register-password" class="modal-wrapper-form__input">
                    </div>
                    <div class="modal-wrapper-form__group">
                        <label for="register-password-conf" class="required">Повторите пароль:</label>
                        <input type="password" id="register-password-conf" class="modal-wrapper-form__input">
                    </div>
                    <button type="submit" class="modal-wrapper-form__button">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {escCloseModal} from '../../modules/modals/listeners'
    export default {
        name: "RegisterForm",
        props: ['url', 'method'],
        mounted() {
            console.log(this.url);
            console.log(this.method);
        },
        methods: {
            check(e) {
                console.log(e);
                escCloseModal(e)
            }
        }
    }
</script>
