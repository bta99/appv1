document.addEventListener('DOMContentLoaded', () => {
   console.log('helo');
    let slider = document.querySelector('.slider2');
    let slidecontent = document.querySelectorAll('.slider2 div');
    console.log(slidecontent);
    let btn = document.querySelector('.btnNext');
    let btn2 = document.querySelector('.btnPre');
    let i = 1;
    let status = 'dungyen';
    let btnitem = document.querySelectorAll('.btnitem');
    let item = document.querySelectorAll('.item');
    let n = 1;
    btn.onclick = () => {
        if (status == 'chuyendong') {
            return false;
        }
        status = 'chuyendong';
        console.log("hello");
        i++;
        slider.style.transition = 'all 1s';
        slider.style.transform = 'translateX(' + (-100 * i) + '%)';
        console.log(i);
    }

    btn2.onclick = () => {
        if (status == 'chuyendong') {
            return false;
        }
        status = 'chuyendong';
        console.log("hello");
        i--;
        slider.style.transition = 'all 1s';
        slider.style.transform = 'translateX(' + (-100 * i) + '%)';
        console.log(i);
    }

    slider.addEventListener('transitionend', () => {
        status = 'dungyen';
        if (i >= slidecontent.length - 1) {
            i = 1;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(' + (-100) + '%)';
        }
        if (i <= 0) {
            i = slidecontent.length - 2;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(' + (-100 * i) + '%)';
        }
    })

    //autoslide
    let abc = 1;

    autoslide();
    function autoslide() {
        if (status == 'chuyendong') {
            return false;
        }
        status = 'chuyendong';
        // console.log("hello");
        i++;
        slider.style.transition = 'all 1s';
        slider.style.transform = 'translateX(' + (-100 * i) + '%)';
        // for (let a = 0; a < item.length; a++) {
        //     btnitem[a].onclick = () => {
        //         // clearTimeout(time);
        //         for (let c = 0; c < item.length; c++) {
        //             // item[c].style.opacity = '0';
        //             btnitem[c].classList.remove("active");
        //         }
        //         // item[a].style.opacity = '1';
        //         btnitem[a].classList.add("active");
        //         n = a + 1;
        //     }
        // }

        // if (n > btnitem.length) {
        //     n = 1;
        // }
        // if (n < 0) {
        //     n = btnitem.length;
        // }
        // for (let i = 0; i < btnitem.length; i++) {
        //     // item[i].style.opacity = '0';
        //     btnitem[i].classList.remove("active");
        // }
        // // item[n - 1].style.opacity = '1';
        // btnitem[n - 1].classList.add("active");
        // n++;
        setTimeout(autoslide, 3000);
    }

}, false)