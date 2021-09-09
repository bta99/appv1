let btnitem = document.querySelectorAll('.btnitem');
        let item = document.querySelectorAll('.item');
        console.log(btnitem);
        let n = 1;
        let time = 2000;
          autoslide();
        function autoslide() {
           
            /*------------*/
            for (let a = 0; a < item.length; a++) {
                btnitem[a].onclick = () => {
                    clearTimeout(time);
                    for (let c = 0; c < item.length; c++) {
                        item[c].style.opacity = '0';
                        btnitem[c].classList.remove("active");
                    }
                    item[a].style.opacity = '1';
                    btnitem[a].classList.add("active");
                    n = a + 1;
                }
            }
            /*-----------*/
            if (n > btnitem.length) {
                n = 1;
            }
            if (n < 0) {
                n = btnitem.length;
            }
            for (let i = 0; i < btnitem.length; i++) {
                item[i].style.opacity = '0';
                btnitem[i].classList.remove("active");
            }
            item[n - 1].style.opacity = '1';
            btnitem[n - 1].classList.add("active");
            n++;
            setTimeout(autoslide, time);
        }