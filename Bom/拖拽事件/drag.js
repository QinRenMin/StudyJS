function drag(obj) {

    obj.onmousedown = function(ev) {
        ev = ev || event;

        const  disX = ev.clientX - this.offsetLeft;
        const  disY = ev.clientY - this.offsetTop;

        if ( obj.setCapture ) {
            obj.setCapture();
        }

        document.onmousemove = function(ev) {
            ev = ev || event;

            obj.style.left = ev.clientX - disX + 'px';
            obj.style.top = ev.clientY - disY + 'px';
        };

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
            //释放全局捕获 releaseCapture();
            if ( obj.releaseCapture ) {
                obj.releaseCapture();
            }
        };
        return false;

    }

}