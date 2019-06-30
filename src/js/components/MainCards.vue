<template>
    <div class="dancers-profiles">
        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave"
        >
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия Имя Фамилия Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155959/UdtFgd1DQ34.jpg')"></div>
            </div>
        </div>

        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave"
        >
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155963/-Gx7aOfdWY8.jpg')"></div>
            </div>
        </div>
        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155959/UdtFgd1DQ34.jpg')"></div>
            </div>
        </div>

        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155963/-Gx7aOfdWY8.jpg')"></div>
            </div>
        </div>
        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155959/UdtFgd1DQ34.jpg')"></div>
            </div>
        </div>

        <div class="dancer-profile-container"
             @mouseenter="enter"
             @mousemove="move"
             @mouseleave="leave">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155963/-Gx7aOfdWY8.jpg')"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainCards",
        props: ['coefficient'],
        data(){
            return {
                container: null,
                avatar: null
            }
        },
        methods: {
            enter(e)  {
                this.container = e.target
                this.avatar = this.container.getElementsByClassName('dancer-profile-avatar')[0]
                let coords = this.calculate(e)
                this.container.style.zIndex = 1
                this.avatar.style.trasition = "all .3s ease"
                this.avatar.style.transform = "perspective(450px)  rotateX(" + coords.x + "deg) rotateY(" + coords.y + "deg) scale3d(1.05, 1.05, 1.05)"
            },
            move(e) {
                let coords = this.calculate(e);
                this.container.style.zIndex = 1
                this.avatar.style.trasition = "none"
                this.avatar.style.transform = "perspective(450px)  rotateX(" + coords.x + "deg) rotateY(" + coords.y + "deg) scale3d(1.05, 1.05, 1.05)"
            },
            leave() {
                this.container.style.zIndex = "auto"
                this.avatar.style.transition = "all .3s ease"
                this.avatar.style.transform = "perspective(450px)  rotateX(" + 0 + "deg) rotateY(" + 0 + "deg) scale3d(1, 1, 1)"
            },
            calculate(event){
                let rect = this.container.getBoundingClientRect();
                let XRel = event.pageX - (rect.left + window.scrollX);
                let YRel = event.pageY - (rect.top + window.scrollY);
                let width = this.container.offsetWidth;
                let height = this.container.offsetHeight;
                let XAngle = -(0.5 - (YRel / height)) * this.coefficient;
                let YAngle = (0.5 - (XRel / width)) * (this.coefficient / 2);

                return {
                    x: XAngle,
                    y: YAngle
                }
            }
        }
    }
</script>
