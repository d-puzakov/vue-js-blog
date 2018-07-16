<template>
  <div id="app">
  <NavigationPanel></NavigationPanel>
  <SectionHead></SectionHead>
  <SectionContent></SectionContent>
  <SectionFooter></SectionFooter>
    <router-view/>
  </div>
</template>

<script>
import NavigationPanel from '@/components/parts/NavigationPanel'
import SectionHead from '@/components/parts/SectionHead'
import SectionContent from '@/components/parts/SectionContent'
import SectionFooter from '@/components/parts/SectionFooter'
export default {
  name: 'App',
  components: {
    NavigationPanel,
    SectionHead,
    SectionContent,
    SectionFooter
  },
  created () {
    let bootstrapScript = document.createElement('script')
    bootstrapScript.setAttribute('src', '/static/js/bootstrap.js')
    document.head.appendChild(bootstrapScript)
  }
}
</script>
