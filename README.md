# iToast

**纯** JavaScript+CSS的 **响应式** 通知插件

Responsive and Zero Dependencies.

## Usage

```javascript
Toast.success('text');
Toast.danger('text');
Toast.info('text');
Toast.warning('text');
```

## Options

自定义显示位置、显示时长及显示图标

Custom display location, display duration and display icon.

```javascript
Toast.config({
    delay: 5000, //显示时长 单位: ms
    positionClass: 'i-toast-right i-toast-top', //位置class
    infoIconClass: 'i-icon-circle-info', //info 图标类
    successIconClass: 'i-icon-circle-success', //success 图标类
    dangerIconClass: 'i-icon-circle-danger', //danger 图标类
    warningIconClass: 'i-icon-circle-info', //warning 图标类
});
```

Param | Type | Default | Details
------------ | ------------- | ------------- | -------------
delay | `Number` | 3000 | Number of miliseconds
positionClass | `String` | *i-toast-right i-toast-top* | CSS class of the position
infoIconClass | `String` | *i-icon-circle-info* | CSS class of the icon shown in a info notification
successIconClass | `String` | *i-icon-circle-success* | CSS class of the icon shown in a success notification
dangerIconClass | `String` | *i-icon-circle-danger* | CSS class of the icon shown in a danger notification
warningIconClass | `String` | *i-icon-circle-info* | CSS class of the icon shown in a warning notification (same with info)

## Licence
iToast is under [MIT licence](https://opensource.org/licenses/mit-license.php)