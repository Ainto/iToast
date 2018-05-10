;
'use strict';
(function () {
    var defconfig = {
        delay: 3000, //显示时长 单位: ms
        positionClass: 'i-toast-right i-toast-top', //位置class
        infoIconClass: 'i-icon-circle-info', //info 图标类
        successIconClass: 'i-icon-circle-success', //success 图标类
        dangerIconClass: 'i-icon-circle-danger', //danger 图标类
        warningIconClass: 'i-icon-circle-info', //warning 图标类
    }

    //主容器
    var iToastContainer;

    var Build = function (type, str, iconClass) {
        var toast = document.createElement('div');
        toast.className = 'i-toast i-toast-' + type;

        var wrapper = document.createElement('div');
        wrapper.className = 'i-toast-wrapper';

        var iconContainer = document.createElement('div');
        iconContainer.className = 'i-toast-icon';

        var icon = document.createElement('i');
        icon.className = iconClass;

        var text = document.createElement('div');
        text.className = 'i-toast-text';
        text.innerHTML = str;

        iconContainer.appendChild(icon);
        wrapper.appendChild(iconContainer);
        wrapper.appendChild(text);
        toast.appendChild(wrapper);

        iToastContainer.appendChild(toast);
        setTimeout(function () {
            toast.className += " i-toast-disappear";
            toast.addEventListener('animationend', function () {
                iToastContainer.removeChild(toast);
            });
        }, defconfig.delay);
    }

    var Toast = {
        config: function (opt) {
            for (var property in opt) {
                if (defconfig.hasOwnProperty(property)) {
                    defconfig[property] = opt[property];
                }
            }
            //重新调整位置
            iToastContainer.className = 'i-toast-container ' + defconfig.positionClass;
        },
        info: function (str = '', callback = null) {
            callback = callback || function () {};
            Build('info', str, defconfig.infoIconClass);
            /*setTimeout(() => {
                callback();
            }, 2000);*/
            setTimeout(callback, defconfig.delay);
        },
        success: function (str = '', callback = null) {
            callback = callback || function () {};
            Build('success', str, defconfig.successIconClass);
            setTimeout(callback, defconfig.delay);
        },
        danger: function (str = '', callback = null) {
            callback = callback || function () {};
            Build('danger', str, defconfig.dangerIconClass);
            setTimeout(callback, defconfig.delay);
        },
        warning: function (str = '', callback = null) {
            callback = callback || function () {};
            Build('warning', str, defconfig.warningIconClass);
            setTimeout(callback, defconfig.delay);
        },
    }

    //初始化
    var container = document.createElement('div');
    container.className = 'i-toast-container ' + defconfig.positionClass;
    iToastContainer = container;
    document.getElementsByTagName("body")[0].appendChild(container);

    window.Toast = Toast;
})();