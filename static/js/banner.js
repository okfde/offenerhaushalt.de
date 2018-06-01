// Snippet
// <div
//     data-component="dismissible-item"
//     data-type="info"
//     data-value="<strong>Welcome message</strong>"
// ></div>

;(function(window){

    var dismissibleItem = function(el, type, value) {

        var html = '<span style="background-color: #26b7d9; color: #fff; border-radius: 5px; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2); box-sizing: border-box; display: block; margin: 0 auto 20px auto; padding: 10px 30px; position: relative;">' + value + ' <button style="background: rgba(0, 0, 0, .4); border: 0; border-radius: 100%; color: #fff; cursor: pointer; font-size: 14px; font-weight: bold; height: 24px; line-height: 20px; margin-top: -12px; right: 10px; position: absolute; top: 50%; width: 24px;" type="button" class="close">X</button></span>';

        el.removeAttribute('data-component');
        el.removeAttribute('data-value');
        el.removeAttribute('data-type');

        // el.classList.add('dismissible', 'dismissible-' + type);

        el.innerHTML = html;

        el.querySelector('.close').addEventListener('click', function(event){
            var height = el.offsetHeight,
                opacity = 1,
                timeout = null;
            function reduceHeight() {
                height -= 2;
                el.setAttribute('style', 'height: ' + height + 'px; opacity: ' + opacity);
                if (height <= 0) {
                    window.clearInterval(timeout)   ;
                    timeout = null;
                    el.remove();
                }
            }
            function fade() {
                opacity -= .1;
                el.setAttribute('style', 'opacity: ' + opacity);
                if (opacity <= 0) {
                    window.clearInterval(timeout);
                    timeout = window.setInterval(reduceHeight, 1);
                }
            }
            // timeout = window.setInterval(fade, 25);
            el.style.display = 'none';
        });

    };

    var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component="dismissible-item"]'));
    if (dismissibles.length) {
        for (var i = 0; i < dismissibles.length; i++) {
            var type = dismissibles[i].getAttribute('data-type'),
                // value = dismissibles[i].getAttribute('data-value');
                value = 'Mit <a style="color: #fff" href="https://offenerhaushalt.de">Offener Haushalt</a> sind wir in der letzten Runde der Google Impact Challenge. <a style="color: #fff" href="https://impactchallenge.withgoogle.com/deutschland2018/charities/okfn">Stimme hier für uns ab!</a>'
            new dismissibleItem(dismissibles[i], type, value)
        }
    }

})(window);
