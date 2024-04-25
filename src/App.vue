<script setup lang="ts">
import { setNotifyDefaultOptions } from 'wot-design-uni'

onLaunch(() => {
  setNotifyDefaultOptions({
    // #ifdef H5
    safeHeight: 44,
    // #endif
    onClick: event => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened'),
  })
})
</script>

<style lang="scss">
@import './styles/main.css';

:root,
page {
    // 品牌色
    --wot-color-theme: #1989fa;

    // 模块标题/重要正文
    --wot-color-title: #323233;
    // // 副标题
    // --color-content: #969799;
    // // 次内容
    // --nut-text-color: #c8c9cc;
}
</style>
