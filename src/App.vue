<!-- eslint-disable no-console -->
<script setup lang="ts">
import { setNotifyDefaultOptions } from 'wot-design-uni'
import { useTheme } from './composables/theme'

const { statusBarHeight, navBarHeight } = useTheme()

onLaunch(() => {
  setNotifyDefaultOptions({
    safeHeight: statusBarHeight + navBarHeight,
    onClick: event => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened'),
  })
})
</script>

<style lang="scss">
@import './styles/main.css';
</style>
