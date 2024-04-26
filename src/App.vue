<!-- eslint-disable no-console -->
<script setup lang="ts">
import { setNotifyDefaultOptions } from 'wot-design-uni'
import { getStatusBarHeight, initTheme } from './composables/theme'

onLaunch(() => {
  initTheme()
  setNotifyDefaultOptions({
    safeHeight: getStatusBarHeight() + getNavBarHeight(),
    onClick: event => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened'),
  })
})
</script>

<style lang="scss">
@import './styles/main.css';
</style>
