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
        <div class="dancer-profile-container">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155959/UdtFgd1DQ34.jpg')"></div>
            </div>
        </div>

        <div class="dancer-profile-container">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155963/-Gx7aOfdWY8.jpg')"></div>
            </div>
        </div>
        <div class="dancer-profile-container">
            <div class="dancer-profile-avatar">
                <div class="dancer-profile-discription">Имя Фамилия</div>
                <div class="dancer-profile-image" style="background-image: url('https://pp.userapi.com/c831108/v831108502/155959/UdtFgd1DQ34.jpg')"></div>
            </div>
        </div>

        <div class="dancer-profile-container">
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
        data(){
            return {
                coeff: 15,
                elem: null
            }
        },
        methods: {
            enter(e)  {
                console.log('enter');
                console.log(e.target);
                this.elem = e.target
                let coords = this.calculate(this.elem, e);
                this.elem.style.zIndex = 1
                let avatar = this.elem.getElementsByClassName('dancer-profile-avatar')[0]
                avatar.style.trasition = "all .3s ease"
                avatar.style.transform = "perspective(450px)  rotateX(" + coords.x + "deg) rotateY(" + coords.y + "deg) scale3d(1.05, 1.05, 1.05)"
            },
            move(e) {
                console.log(e.target);
                let coords = this.calculate(this.elem, e);
                this.elem.style.zIndex = 1
                let avatar = this.elem.getElementsByClassName('dancer-profile-avatar')[0]
                avatar.style.trasition = "none"
                console.log(coords);
                avatar.style.transform = "perspective(450px)  rotateX(" + coords.x + "deg) rotateY(" + coords.y + "deg) scale3d(1.05, 1.05, 1.05)"
            },
            leave(e) {
                console.log(e.target);
            },
            calculate(elem, event){
                let XRel = event.pageX - elem.offsetLeft;
                let YRel = event.pageY - elem.offsetTop;
                let width = elem.offsetWidth;
                let height = elem.offsetHeight;
                console.log(elem.offsetLeft);
                console.log(elem.offsetTop);
                let XAngle = -(0.5 - (YRel / height)) * this.coeff;
                let YAngle = (0.5 - (XRel / width)) * (this.coeff / 2);

                return {
                    x: XAngle,
                    y: YAngle
                }
            }
        }
    }
</script>
